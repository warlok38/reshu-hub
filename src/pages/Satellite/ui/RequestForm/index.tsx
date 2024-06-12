import React from 'react';
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
import { useGetSatellitesParameters } from 'features/satellites';
import { Controller, useForm } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'react-router-dom';

type SelectSatellitesMockType = { id: number; label: string };

const selectSatellitesMock: SelectSatellitesMockType[] = [
  { id: 1, label: 'ReshUCube 1' },
  { id: 2, label: 'ReshUCube 2' },
];

type FormValue = {
  satellite: number;
  parameters: string;
  dateFrom: Dayjs;
  dateTo: Dayjs;
};

export const RequestForm = () => {
  const { list, isLoading } = useGetSatellitesParameters();
  const { handleSubmit, register, control } = useForm<FormValue>();
  const [, setSearchParams] = useSearchParams();

  const submitHandler = ({ parameters, dateFrom, dateTo }: FormValue) => {
    const params = new URLSearchParams();
    params.append('parameters', parameters);
    params.append('dateFrom', dayjs(dateFrom).format('YYYY-MM-DD'));
    params.append('dateTo', dayjs(dateTo).format('YYYY-MM-DD'));
    setSearchParams(params);
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
          <Controller
            name="parameters"
            control={control}
            render={({ field }) => (
              <Autocomplete
                options={list}
                disablePortal
                loading={isLoading}
                getOptionLabel={(option) => option.label}
                onChange={(_, data) => field.onChange(data ? data.value : '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Параметр"
                  />
                )}
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
