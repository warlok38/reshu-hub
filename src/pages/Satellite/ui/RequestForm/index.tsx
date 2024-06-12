import React, { FormEventHandler } from 'react';
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useGetSatellitesIndicators } from 'features/satellites';
import { Controller, useForm } from 'react-hook-form';

type SelectSatellitesMockType = { id: number; label: string };

const selectSatellitesMock: SelectSatellitesMockType[] = [
  { id: 1, label: 'ReshUCube 1' },
  { id: 2, label: 'ReshUCube 2' },
];
const selectSatelliteParamsMock = [
  { value: '1', label: 'Температура' },
  { value: '2', label: 'Магнитометр' },
];

export const RequestForm = () => {
  const { list } = useGetSatellitesIndicators();
  const { handleSubmit, register, control } = useForm();

  const submitHandler = (values: any) => {
    console.log('values', values);
  };

  return (
    <Stack
      spacing={8}
      padding={4}
      width={400}
      height="fit-content"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px"
      borderRadius={1}
    >
      <Typography variant="h5">Параметры данных</Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={8}>
          <FormControl fullWidth>
            <InputLabel>Спутник</InputLabel>
            <Select
              defaultValue={1}
              label="Спутник"
              readOnly
              {...register('satellite')}
            >
              {selectSatellitesMock.map(({ id, label }) => (
                <MenuItem
                  key={id}
                  value={id}
                >
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            options={selectSatelliteParamsMock}
            disablePortal
            renderInput={(params) => (
              <TextField
                {...params}
                label="Параметр"
                {...register('parameter')}
              />
            )}
          />
          <Stack
            direction="row"
            spacing={2}
          >
            <Controller
              name="dateFrom"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Дата с"
                  value={field.value}
                  inputRef={field.ref}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                />
              )}
            ></Controller>
            <Controller
              name="dateTo"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Дата по"
                  value={field.value}
                  inputRef={field.ref}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                />
              )}
            ></Controller>
          </Stack>
          <Button
            variant="contained"
            type="submit"
          >
            Построить график
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
