import React from 'react';
import { Stack, TextField } from '@mui/material';

export function EventForm() {
  return (
    <Stack spacing={4}>
      <TextField label="Название" />
      <TextField
        label="Описание"
        multiline
        rows={5}
      />
    </Stack>
  );
}
