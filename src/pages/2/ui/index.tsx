import React from 'react';
import { Cards } from './Cards';
import { Typography } from '@mui/material';

const EventsPage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        mb={(theme) => theme.spacing(6)}
        sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}
      >
        Мероприятия
      </Typography>
      <Cards />
    </div>
  );
};

export default EventsPage;
