import React from 'react';
import { Stack } from '@mui/material';
import { SendForm } from './SendForm';
import { List } from './List';

export const Comments = () => {
  return (
    <Stack spacing={10}>
      <SendForm />
      <List />
    </Stack>
  );
};
