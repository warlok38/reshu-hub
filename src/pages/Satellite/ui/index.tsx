import React from 'react';
import { RequestForm } from './RequestForm';
import { Stack } from '@mui/material';
import { Chart } from './Chart';

const SatellitePage = () => {
  return (
    <Stack
      direction="row"
      spacing={6}
    >
      <RequestForm />
      <Chart />
    </Stack>
  );
};

export default SatellitePage;
