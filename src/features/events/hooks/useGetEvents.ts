import { useGetEventsQuery } from 'shared/api/events/eventsApi';

export function useGetEvents() {
  const { currentData } = useGetEventsQuery();

  return {
    list: currentData,
  };
}
