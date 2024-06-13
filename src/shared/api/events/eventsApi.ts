import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { EVENTS_API } from './consts';
import { EventEntity, EventParams, EventsList } from 'shared/models/events';

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
    getEventDetail: build.query<EventEntity, number>({
      queryFn: createQueryFn(
        (id) => ({
          url: `${EVENTS_API}/${id}`,
          method: 'GET',
        }),
        EventEntity
      ),
    }),
    createEvent: build.mutation<void, EventParams>({
      queryFn: createQueryFn((data) => ({
        url: EVENTS_API,
        method: 'POST',
        data,
      })),
    }),
    deleteEvent: build.mutation<void, { id: number }>({
      queryFn: createQueryFn(({ id }) => ({
        url: `${EVENTS_API}/${id}`,
        method: 'DELETE',
        data: id,
      })),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEventsQuery,
  useGetEventDetailQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
