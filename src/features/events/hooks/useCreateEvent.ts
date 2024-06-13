import { SelectChangeEvent } from '@mui/material';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCreateEventMutation } from 'shared/api/events/eventsApi';
import { EventCreateEntity, EventParams } from 'shared/models/events';
import { RootState } from 'shared/store';

export function useCreateEvent() {
  //TODO хардкод на селект, нужна интеграция бекенда
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const changeSelectHandler = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value as string);
  };

  const [createEvent, { isLoading, isSuccess, error }] =
    useCreateEventMutation();
  const form = useForm<EventCreateEntity>();
  const { user } = useSelector(({ auth }: RootState) => auth);

  const submitHandler = useCallback(
    (values: EventCreateEntity) => {
      if (user) {
        const finalValues: EventParams = {
          ...values,
          userCreateId: user.id,
          dateStart: dayjs(values.dateStart).format('YYYY-MM-DDTHH:mm:ss'),
          dateEnd: dayjs(values.dateEnd).format('YYYY-MM-DDTHH:mm:ss'),
        };
        createEvent(finalValues);
      }
    },
    [createEvent, user]
  );

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Мероприятие создано!', {
        variant: 'success',
      });
      form.reset();
      setSelectedValue(undefined);
    }
  }, [isSuccess, form]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message || 'Не удалось создать мероприятие', {
        variant: 'error',
      });
    }
  }, [error]);

  return {
    onSubmit: submitHandler,
    form,
    isLoading,
    selectedType: selectedValue,
    onChangeEventType: changeSelectHandler,
  };
}
