import React from 'react';
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useCreateEvent } from 'features/events/hooks/useCreateEvent';
import { EventCreateEntity } from 'shared/models/events';
import { Controller } from 'react-hook-form';

type SelectItemsMockType = { code: string; name: string };

const selectItemsMock: SelectItemsMockType[] = [
  { code: '1', name: 'Конкурс' },
  { code: '2', name: 'Хакатон' },
  { code: '3', name: 'Экскурсия' },
];

export function EventForm() {
  const { onSubmit, onChangeEventType, selectedType, form, isLoading } =
    useCreateEvent();
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const submitHandler = (values: EventCreateEntity) => {
    onSubmit?.(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={4}>
        <TextField
          {...register('name', { required: 'Обязательное поле' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          label="Название"
        />
        <TextField
          {...register('subtitle', { required: 'Обязательное поле' })}
          error={!!errors.subtitle}
          helperText={errors.subtitle?.message}
          label="Подзаголовок"
        />
        <FormControl fullWidth>
          <InputLabel id="select-eventsType-inputLabel">Тип</InputLabel>
          <Select
            {...register('eventsType', { required: 'Обязательное поле' })}
            error={!!errors.eventsType}
            labelId="select-eventsType-label"
            id="select-eventsType"
            value={selectedType}
            label="Тип"
            onChange={onChangeEventType}
          >
            {selectItemsMock.map(({ code, name }) => (
              <MenuItem
                key={code}
                value={code}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack
          direction="row"
          spacing={2}
        >
          <Controller
            name="dateStart"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Дата начала"
                value={field.value}
                inputRef={field.ref}
                onChange={(date) => {
                  field.onChange(date);
                }}
              />
            )}
          />
          <Controller
            name="dateEnd"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Дата окончания"
                value={field.value}
                inputRef={field.ref}
                onChange={(date) => {
                  field.onChange(date);
                }}
              />
            )}
          />
        </Stack>
        <TextField
          {...register('description', { required: 'Обязательное поле' })}
          error={!!errors.description}
          helperText={errors.description?.message}
          label="Описание"
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
    // <Stack spacing={4}>
    //   <TextField label="Название" />
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">Тип</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={selectedValue}
    //       label="Тип"
    //       onChange={changeSelectHandler}
    //     >
    //       {selectItemsMock.map(({ code, name }) => (
    //         <MenuItem
    //           key={code}
    //           value={code}
    //         >
    //           {name}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    //   <Stack
    //     direction="row"
    //     spacing={2}
    //   >
    //     <DatePicker label="Дата начала" />
    //     <DatePicker label="Дата окончания" />
    //   </Stack>
    //   <TextField label="Место проведения" />
    //   <TextField
    //     label="Описание"
    //     multiline
    //     rows={5}
    //   />
    //   <Button
    //     variant="contained"
    //     sx={{ width: 'fit-content' }}
    //   >
    //     Создать
    //   </Button>
    // </Stack>
  );
}
