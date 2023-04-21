import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// const tags = [
//   'Все теги',
//   'Выставка',
//   'Конкурс',
//   'Концерт',
//   'Круглый стол',
//   'Мастер-класс',
//   'Олимпиада',
//   'Открытая лекция',
// ];

const handleDelete = () => {};

export default function Tags() {
  return (
    <Box sx={{ width: '100%', mb: '20px' }}>
      <Stack
        direction="row"
        spacing={2}
      >
        <Typography
          fontWeight={'400'}
          fontSize={'18px'}
          lineHeight={'21px'}
          letterSpacing={'0.15px'}
        >
          Теги:
        </Typography>
        <Chip
          label="Все теги"
          variant="outlined"
          color="warning"
          size="small"
        />

        <Chip
          label="Выставка "
          variant="outlined"
          color="warning"
          size="small"
          onDelete={handleDelete}
        />
        <Chip
          label="Конкурс"
          variant="outlined"
          color="warning"
          size="small"
          onDelete={handleDelete}
        />
        <Chip
          label="Концерт"
          variant="outlined"
          color="warning"
          size="small"
        />
        <Chip
          label="Круглый стол"
          variant="outlined"
          color="warning"
          size="small"
        />
        <Chip
          label="Мастер-класс"
          variant="outlined"
          color="warning"
          size="small"
        />
        <Chip
          label="Олимпиада"
          variant="outlined"
          color="warning"
          size="small"
        />
        <Chip
          label="Открытая лекция"
          variant="outlined"
          color="warning"
          size="small"
        />
      </Stack>
    </Box>
  );
}
