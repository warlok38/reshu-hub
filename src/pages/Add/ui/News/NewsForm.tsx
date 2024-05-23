import React from 'react';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';
import { CreateNewsEntity } from 'shared/models/news';
import { UseFormReturn } from 'react-hook-form';

type NewsFormProps = {
  form: UseFormReturn<CreateNewsEntity>;
  isLoading?: boolean;
  onSubmit: (values: CreateNewsEntity) => void;
};

export function NewsForm({ form, isLoading, onSubmit }: NewsFormProps) {
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitHandler = (values: CreateNewsEntity) => {
    onSubmit?.(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={4}>
        <TextField
          {...register('title', { required: 'Обязательное поле' })}
          error={!!errors.title}
          helperText={errors.title?.message}
          label="Заголовок"
        />
        <TextField
          {...register('subTitle')}
          label="Подзаголовок"
        />
        <TextField
          {...register('newsText', { required: 'Обязательное поле' })}
          error={!!errors.newsText}
          helperText={errors.newsText?.message}
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
