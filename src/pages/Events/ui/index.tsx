import React from 'react';
import { Cards } from './Cards';
import { Typography } from '@mui/material';
import { TagsWrapper } from './TagsWrapper';
import { EventStatusTabs } from 'shared/components/EventStatusTabs';
import { ButtonMore } from 'shared/components/ButtonMore';
import { CarouselEvents } from 'shared/components/CarouselEvents';

const EventsPage = () => {
  return (
    <div>
      <CarouselEvents />
      <Typography
        variant="h3"
        mb={(theme) => theme.spacing(6)}
        sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}
      >
        Мероприятия
      </Typography>
      <TagsWrapper />
      <EventStatusTabs />
      <Cards />
      <ButtonMore />
    </div>
  );
};

export default EventsPage;
