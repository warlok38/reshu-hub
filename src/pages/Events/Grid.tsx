import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import { MediaCard } from './Card';

export function WrapperCards() {
  return (
    <Box sx={{ width: '100%', mb: '32px' }}>
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
