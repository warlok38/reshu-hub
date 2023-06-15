import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
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
    <Box
      sx={(theme) => ({
        width: '100%',
        padding: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
      })}
    >
      <Typography
        sx={{ mb: '16px' }}
        gutterBottom
        color="#FF9764"
        fontWeight="700"
        fontSize="48px"
        letterSpacing="0.5px"
        component="div"
      >
        {name}
      </Typography>
      <Grid
        container
        spacing={4}
      >
        {materials.map(({ id, name, type, size }) => (
          <Grid
            key={id}
            item
            xs={12}
          >
            <Material
              id={id}
              name={name}
              type={type}
              size={size}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
