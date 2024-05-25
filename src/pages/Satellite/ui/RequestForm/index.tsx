import React, { useState } from 'react';
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

type SelectSatellitesMockType = { id: number; label: string };

const selectSatellitesMock: SelectSatellitesMockType[] = [
  { id: 1, label: 'ReshUCube 1' },
  { id: 2, label: 'ReshUCube 2' },
];
const selectSatelliteParamsMock = [
  { id: 1, label: 'Температура' },
  { id: 2, label: 'Магнитометр' },
];

export const RequestForm = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const changeSelectHandler = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value);
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
      <FormControl fullWidth>
        <InputLabel>Спутник</InputLabel>
        <Select
          value={selectedValue}
          label="Спутник"
          onChange={changeSelectHandler}
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
          />
        )}
      />
      <Stack
        direction="row"
        spacing={2}
      >
        <DatePicker label="Дата с" />
        <DatePicker label="Дата по" />
      </Stack>
      <Button variant="contained">Построить график</Button>
    </Stack>
  );
};
