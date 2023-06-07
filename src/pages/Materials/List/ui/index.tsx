import React from 'react';
import { Typography } from '@mui/material';
import { Cards } from './Cards';
import { useOutlet } from 'react-router';

const MaterialsPage = () => {
  const outlet = useOutlet();

  if (outlet) {
    return outlet;
  }

  return (
    <div>
      <Typography
        variant="h3"
        mb={(theme) => theme.spacing(6)}
        sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}
      >
        Методические материалы
      </Typography>
      <Cards />
    </div>
  );
};

export default MaterialsPage;
