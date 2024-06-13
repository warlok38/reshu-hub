import { useDeleteNewsMutation } from 'shared/api/news/newsApi';
import { useNavigate } from 'react-router-dom';
import { NEWS_PATH } from 'shared/constants/routePaths';

export function useDeleteNews() {
  const [deleteNews, { isLoading, isError }] = useDeleteNewsMutation();
  const navigate = useNavigate();

  // TODO: add catch
  const onDelete = (input: { id: number }) => {
    deleteNews(input)
      .unwrap()
      .then(() => {
        navigate(NEWS_PATH);
      });
  };

  return {
    onDelete,
    isLoading,
    isError,
  };
}
