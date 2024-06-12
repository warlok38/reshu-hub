import React from 'react';
import { RequestForm } from './RequestForm';
import { Stack } from '@mui/material';
import { Chart } from './Chart';
import { useSatellitesChart } from 'features/satellites';

const SatellitePage = () => {
  const { list } = useSatellitesChart();

  return (
    <Stack
      direction="column"
      spacing={6}
      alignItems="center"
    >
      <RequestForm />
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={4}
      >
        {list &&
          list.map((chart) => (
            <Chart
              key={chart.id}
              series={chart.series}
              xAxis={chart.xAxis}
            />
          ))}
      </Stack>
    </Stack>
  );
};

export default SatellitePage;
