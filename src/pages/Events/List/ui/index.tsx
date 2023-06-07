import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Cards } from './Cards';
import { useOutlet } from 'react-router';
import { eventsMock } from 'shared/mocks/events';

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
    <div>
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
    </div>
  );
};

export default EventsPage;
