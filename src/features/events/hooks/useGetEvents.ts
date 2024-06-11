import { useGetEventsQuery } from 'shared/api/events/eventsApi';

export function useGetEvents() {
  const { currentData, isFetching } = useGetEventsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return {
    list: currentData,
    isLoading: isFetching,
  };
}
