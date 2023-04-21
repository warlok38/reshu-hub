import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from './Card';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', mb: '25px' }}>
      <Grid
        container
        rowSpacing={7}
        columnSpacing={{ xs: 7, sm: 7, md: 7 }}
      >
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}
