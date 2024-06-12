import React from 'react';
import { LineChart, LineChartProps } from '@mui/x-charts/LineChart';

export const Chart = (props: LineChartProps) => {
  return (
    <LineChart
      width={500}
      height={300}
      {...props}
    />
  );
};
