import React from 'react';
import * as S from '../styled';
import {Container, Grid, Typography} from '@mui/material';

  const cards = [1, 2, 3, 4];


  export function Target() {
    return(
        <Container
        maxWidth="md"
        disableGutters
      >
        <Typography
          variant="h4"
          sx={{ mb: 8 }}
        >
          Зачем нужен ReshUCube?
        </Typography>
        <Grid
          container
          spacing={4}
        >
          {cards.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
            >
              <Typography variant="h5">Современно</Typography>
              <Typography variant="body1">
                Вы знаете, как важно иметь надежного партнера, который поможет
                вам решить сложные задачи и достичь поставленных целей. Именно
                поэтому мы представляем вам ReshuHube - вашего надежного
                партнера в бизнесе, образовании и личной жизни.
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

    );
}