import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Comment } from './Comment';

export const List = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h5">Всего 34</Typography>
      <Stack spacing={8}>
        <Comment />
        <Comment />
      </Stack>
    </Stack>
  );
};
