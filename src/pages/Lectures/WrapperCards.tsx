import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MediaCard } from './MediaCard';

export function WrapperCards() {
  return (
    <Box sx={{ width: '100%', mb: '64px' }}>
      <Grid
        container
        rowSpacing={7}
        columnSpacing={{ xs: 7, sm: 7, md: 7 }}
      >
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <MediaCard />
        </Grid>
      </Grid>
    </Box>
  );
}
