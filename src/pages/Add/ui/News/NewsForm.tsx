import React from 'react';
import { Stack, TextField } from '@mui/material';

export function NewsForm() {
  return (
    <Stack spacing={4}>
      <TextField label="Заголовок" />
      <TextField
        label="Текст"
        multiline
        rows={5}
      />
    </Stack>
  );
}
