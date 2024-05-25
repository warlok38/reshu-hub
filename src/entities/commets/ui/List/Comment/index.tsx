import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

export const Comment = () => {
  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Avatar />
        <Stack>
          <Typography fontWeight={700}>Иван Иванов</Typography>
          <Typography>1.01.2024</Typography>
        </Stack>
      </Stack>
      <Box>
        Aliquip deserunt reprehenderit proident veniam pariatur. Aute dolor
        exercitation exercitation nulla tempor aliqua ullamco voluptate esse
        sint esse deserunt est. Sunt cupidatat tempor irure esse ut ea eiusmod
        laboris. Esse magna consequat ullamco eiusmod aute cillum id sint id
        ipsum ex esse. Nostrud non nulla cupidatat cillum fugiat non nulla.
        Eiusmod ullamco velit ullamco magna occaecat ea tempor sunt aliquip. Ad
        proident consequat sit culpa. Anim adipisicing ad anim nisi ea ullamco
        excepteur reprehenderit do qui commodo. Velit veniam in fugiat veniam.
        Excepteur esse eu tempor voluptate quis ullamco non nulla. Non eu cillum
        nisi consectetur occaecat minim. Aliquip proident pariatur elit pariatur
        ut ad cupidatat.
      </Box>
      <Button
        color="secondary"
        sx={{ width: 'fit-content' }}
      >
        Ответить
      </Button>
    </Stack>
  );
};
