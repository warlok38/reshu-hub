import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { Material } from './Material';

type DetailCardProps = {
  id: number;
  name: string;
  materials: {
    id: number;
    name: string;
    type: string;
    size: number;
  }[];
};

export function DetailCard({ id, name, materials }: DetailCardProps) {
  return (
    <Stack
      spacing={4}
      sx={(theme) => ({
        width: '100%',
        padding: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
      })}
    >
      <Typography
        fontWeight="700"
        fontSize="48px"
        letterSpacing="0.5px"
        component="div"
      >
        {name}
      </Typography>
      <Button
        variant="contained"
        sx={{ width: 'fit-content' }}
      >
        Добавить
      </Button>
      <Stack spacing={2}>
        {materials.map(({ id, name, type, size }) => (
          <Material
            id={id}
            name={name}
            type={type}
            size={size}
          />
        ))}
      </Stack>
    </Stack>
  );
}
