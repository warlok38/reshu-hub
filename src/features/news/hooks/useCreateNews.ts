import { useCreateNewsMutation } from 'shared/api/news/newsApi';

export function useCreateNews() {
  const [createNews, { isLoading, isError }] = useCreateNewsMutation();

  return {
    onCreate: createNews,
    isLoading,
    isError,
  };
}
