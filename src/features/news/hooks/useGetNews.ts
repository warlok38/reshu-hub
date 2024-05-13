import { useGetNewsQuery } from 'shared/api/news/newsApi';

export function useGetNews() {
  const { currentData } = useGetNewsQuery();

  return {
    list: currentData,
  };
}
