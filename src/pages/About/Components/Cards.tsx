import React from 'react';
import { MediaCard } from './MediaCard';
import { Grid, Typography, Box } from '@mui/material';

const cards = [1, 2, 3, 4];

export function Cards() {
  return (
    <Box sx={{ width: '100%', mb: '32px' }}>
      <Typography
        variant="h4"
        sx={{ mb: 8 }}
      >
        Спутники
      </Typography>

      <Grid
        container
        spacing={4}
      >
        {cards.map((_card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <MediaCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
