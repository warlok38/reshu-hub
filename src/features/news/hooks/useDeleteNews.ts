import { useDeleteNewsMutation } from 'shared/api/news/newsApi';

export function useDeleteNews() {
  const [deleteNews, { isLoading, isError }] = useDeleteNewsMutation();

  return {
    onDelete: deleteNews,
    isLoading,
    isError,
  };
}
