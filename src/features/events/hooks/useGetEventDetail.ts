import { useGetEventDetailQuery } from 'shared/api/events/eventsApi';

export function useGetEventDetail(id: number) {
  const { currentData } = useGetEventDetailQuery(id);

  return {
    detail: currentData,
  };
}
