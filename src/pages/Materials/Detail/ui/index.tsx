import React from 'react';
import { DetailCard } from './DetailCard';
import { materialsDetailMock } from 'shared/mocks/materials';
import { Box, Grid } from '@mui/material';
import { Carousel } from 'shared/components/Carousel';

const DetailPage = () => {
  return (
    <div>
      <Box
        sx={{ height: 741 }}
        mb={(theme) => theme.spacing(6)}
      >
        <Carousel
          list={[
            {
              link: '/images/material7.png',
              title: 'Физика в опытах. Часть 4.\nВолны и оптика',
              description:
                'Количество модулей: 3\nАвтор: Мамаева Елена Викторовна, доцент кафедры физики ',
            },
          ]}
        />
      </Box>
      <Grid
        container
        spacing={8}
      >
        {materialsDetailMock.map(({ id, name, materials }) => (
          <Grid
            item
            xs={12}
          >
            <DetailCard
              key={id}
              id={id}
              name={name}
              materials={materials}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DetailPage;
