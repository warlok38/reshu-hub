import { isNil } from 'lodash';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateNewsMutation } from 'shared/api/news/newsApi';
import { CreateNewsEntity } from 'shared/models/news';

export function useCreateNews() {
  const [createNews, { isLoading, isSuccess, error }] = useCreateNewsMutation();
  const [file, setFile] = useState<File>();
  const form = useForm<CreateNewsEntity>();

  const uploadFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (isNil(fileList)) {
      return;
    }

    setFile(fileList[0]);
  };

  const submitHandler = (values: CreateNewsEntity) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (file) {
      formData.append('file', file);
    }

    createNews(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Новость опубликована!', {
        variant: 'success',
      });
      form.reset();
      //TODO добавить сброс картинки и сделать её обязательным полем
    }
  }, [isSuccess, form]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message || 'Не удалось опубликовать новость', {
        variant: 'error',
      });
    }
  }, [error]);

  return {
    onSubmit: submitHandler,
    onUploadFile: uploadFileHandler,
    form,
    isLoading,
  };
}
