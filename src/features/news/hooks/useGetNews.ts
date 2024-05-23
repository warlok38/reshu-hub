import { useGetNewsQuery } from 'shared/api/news/newsApi';

export function useGetNews() {
  const { currentData, isFetching } = useGetNewsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return {
    list: currentData,
    isLoading: isFetching,
  };
}
