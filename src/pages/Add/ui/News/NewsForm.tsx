import React from 'react';
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { CreateNewsEntity } from 'shared/models/news';
import { useCreateNews } from 'features/news/hooks/useCreateNews';
import { UploadInput } from 'shared/components/UploadInput/UploadInput';

export function NewsForm() {
  const { onSubmit, onUploadFile, form, isLoading } = useCreateNews();
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
          {...register('subtitle')}
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
        <Stack>
          <Typography>Обложка новости</Typography>
          <UploadInput
            onChange={onUploadFile}
            inputProps={{ accept: 'image/jpg, image/jpeg, image/png' }}
          />
        </Stack>
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
