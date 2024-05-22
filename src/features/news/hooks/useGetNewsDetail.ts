import { useGetNewsDetailQuery } from 'shared/api/news/newsApi';

export function useGetNewsDetail(id: number) {
  const { currentData } = useGetNewsDetailQuery(id);

  return {
    detail: currentData,
  };
}
