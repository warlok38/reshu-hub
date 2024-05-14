import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { NewsForm } from './News';
import { EventForm } from './Event';
import { useCreateNews } from 'features/news/hooks/useCreateNews';

type SelectMockCodes = 'news' | 'event';
type SelectItemsMockType = { code: SelectMockCodes; name: string };

const selectItemsMock: SelectItemsMockType[] = [
  { code: 'news', name: 'Новость' },
  { code: 'event', name: 'Мероприятие' },
];

const AddPage = () => {
  const [selectedValue, setSelectedValue] = useState<
    SelectMockCodes | undefined
  >();

  const changeSelectHandler = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value as SelectMockCodes);
  };

  const { onCreate, isLoading: isLoadingCreateNews } = useCreateNews();

  return (
    <Stack spacing={8}>
      <Box sx={{ maxWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Создать</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedValue}
            label="Создать"
            onChange={changeSelectHandler}
          >
            {selectItemsMock.map(({ code, name }) => (
              <MenuItem value={code}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {selectedValue === 'news' && (
        <NewsForm
          onCreate={onCreate}
          isLoading={isLoadingCreateNews}
        />
      )}
      {selectedValue === 'event' && <EventForm />}
    </Stack>
  );
};

export default AddPage;
