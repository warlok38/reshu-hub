import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

type SelectItemsMockType = { code: string; name: string };

const selectItemsMock: SelectItemsMockType[] = [
  { code: '1', name: 'Конкурс' },
  { code: '2', name: 'Хакатон' },
  { code: '3', name: 'Экскурсия' },
];

export function EventForm() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  const changeSelectHandler = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value as string);
  };

  return (
    <Stack spacing={4}>
      <TextField label="Название" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Тип"
          onChange={changeSelectHandler}
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
        spacing={4}
      >
        <TextField
          label="Дата начала"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Дата окончания"
          sx={{ width: '100%' }}
        />
      </Stack>
      <TextField label="Место проведения" />
      <TextField
        label="Описание"
        multiline
        rows={5}
      />
      <Button
        variant="contained"
        sx={{ width: 'fit-content' }}
      >
        Создать
      </Button>
    </Stack>
  );
}
