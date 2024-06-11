import React from 'react';
import * as S from './styled';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Cards } from './Cards';
import { Carousel } from 'shared/components/Carousel';
import { aboutDescriptionMock } from 'shared/mocks/about';

function AboutPage() {
  return (
    <S.Wrapper>
      <Box sx={{ height: 741 }}>
        <Carousel
          list={[
            {
              src: '/images/satellite0.png',
              title: 'ReshUCube',
              description:
                'Маленький космический кубик с большим исследовательским потенциалом ',
            },
          ]}
          extra={<Button variant="contained">СМОТРЕТЬ ВИДЕО</Button>}
        />
      </Box>
      <div>
        <Typography
          variant="h3"
          mb={6}
          sx={(theme) => ({
            color: theme.palette.primary.main,
            fontWeight: 700,
          })}
        >
          Зачем нужен ReshUCube?
        </Typography>
        <Grid
          container
          spacing={8}
        >
          {aboutDescriptionMock.map(({ title, description }, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
            >
              <Typography
                variant="h5"
                mb={4}
              >
                {title}
              </Typography>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography
          variant="h3"
          mb={6}
          sx={(theme) => ({
            color: theme.palette.primary.main,
            fontWeight: 700,
          })}
        >
          Спутники
        </Typography>
        <Cards />
      </div>
    </S.Wrapper>
  );
}

export default AboutPage;
