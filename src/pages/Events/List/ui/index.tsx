import React from 'react';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { Cards } from './Cards';
import { useOutlet } from 'react-router';
import { eventsCarouselListMock, eventsMock } from 'shared/mocks/events';
import { Carousel } from 'shared/components/Carousel';
import { ArrowRight } from '@mui/icons-material';
import * as S from './styled';
import { useGetEvents } from 'features/events/hooks/useGetEvents';

type TabPanelProps = {
  children?: React.ReactNode;
  value: string;
};

function TabPanel({ children, value }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${value}`}
      aria-labelledby={`simple-tab-${value}`}
    >
      {children}
    </div>
  );
}

const EventsPage = () => {
  const outlet = useOutlet();

  const { list: eventsList } = useGetEvents();
  console.log('events from backend: ', eventsList);

  const [value, setValue] = React.useState<'actual' | 'past'>('actual');
  const list = eventsMock;

  const changeTabsHandler = (
    event: React.SyntheticEvent,
    newValue: 'actual' | 'past'
  ) => {
    setValue(newValue);
  };

  if (outlet) {
    return outlet;
  }

  return (
    <S.Wrapper>
      <Box
        sx={{ height: 500 }}
        mb={(theme) => theme.spacing(6)}
      >
        <Carousel
          list={eventsCarouselListMock}
          autoPlay
          interval={5000}
          extra={
            <Button variant="contained">
              Подробнее <ArrowRight />
            </Button>
          }
        />
      </Box>
      <Typography
        variant="h3"
        mb={(theme) => theme.spacing(6)}
        sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}
      >
        Мероприятия
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box mb={(theme) => theme.spacing(6)}>
          <Tabs
            value={value}
            onChange={changeTabsHandler}
          >
            <Tab
              label="Актуальные"
              value="actual"
            />
            <Tab
              label="Прошлые"
              value="past"
            />
          </Tabs>
        </Box>
        <TabPanel value={value}>
          <Cards list={list[value]} />
        </TabPanel>
      </Box>
    </S.Wrapper>
  );
};

export default EventsPage;
