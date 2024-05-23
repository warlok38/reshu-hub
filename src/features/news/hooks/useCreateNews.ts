import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useCreateNewsMutation } from 'shared/api/news/newsApi';
import { CreateNewsEntity } from 'shared/models/news';

export function useCreateNews() {
  const [createNews, { isLoading, isError }] = useCreateNewsMutation();

  const form = useForm<CreateNewsEntity>();

  const submitHandler = (values: CreateNewsEntity) => {
    createNews(values)
      .unwrap()
      .then(() => {
        enqueueSnackbar('Новость опубликована', { variant: 'success' });
        form.reset();
      })
      .catch(() => {
        enqueueSnackbar('Не удалось опубликовать новость', {
          variant: 'error',
        });
      });
  };

  return {
    onSubmit: submitHandler,
    form,
    isLoading,
    isError,
  };
}
