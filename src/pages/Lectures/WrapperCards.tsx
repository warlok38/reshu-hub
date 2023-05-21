import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MediaCard } from './MediaCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function WrapperCards() {
  return (
    <Box sx={{ width: '100%', mb: '64px' }}>
      <Grid
        container
        spacing={4}
      >
        {cards.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <MediaCard id={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
