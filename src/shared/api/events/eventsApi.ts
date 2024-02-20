import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { EVENTS_API } from './consts';
import { EventsList } from 'shared/models/events';

export const eventsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<EventsList, void>({
      queryFn: createQueryFn(
        () => ({
          url: EVENTS_API,
          method: 'GET',
        }),
        EventsList
      ),
    }),
  }),
  overrideExisting: false,
});

export const { useGetEventsQuery } = eventsApi;
