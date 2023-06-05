import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export function EventStatusTabs() {
  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', mb: '24px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#FF526D',
          },
          '& .Mui-selected': {
            color: '#181818',
          },
          '& .MuiTab-root': {
            color: '#616161',
          },
        }}
      >
        <Tab
          value="one"
          label="Активные"
          sx={{
            '&.Mui-selected': {
              color: '#181818',
            },
          }}
        />
        <Tab
          value="two"
          label="Прошлые"
          sx={{
            '&.Mui-selected': {
              color: '#181818',
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
