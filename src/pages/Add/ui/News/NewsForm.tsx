import React from 'react';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';
import { CreateNewsEntity } from 'shared/models/news';
import { useForm } from 'react-hook-form';

type NewsFormProps = {
  isLoading?: boolean;
  onCreate: (data: CreateNewsEntity) => void;
};

export function NewsForm({ isLoading, onCreate }: NewsFormProps) {
  const { handleSubmit, register } = useForm<CreateNewsEntity>();
  const submitHandler = (values: CreateNewsEntity) => {
    onCreate?.(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={4}>
        <TextField
          {...register('title')}
          label="Заголовок"
        />
        <TextField
          {...register('subTitle')}
          label="Подзаголовок"
        />
        <TextField
          {...register('newsText')}
          label="Текст"
          multiline
          rows={5}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: 'fit-content' }}
          disabled={isLoading}
        >
          Создать
          {isLoading && (
            <CircularProgress
              sx={{ marginLeft: 2 }}
              size="1em"
              color="secondary"
            />
          )}
        </Button>
      </Stack>
    </form>
  );
}
