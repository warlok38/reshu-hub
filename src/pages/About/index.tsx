import React from 'react';
import * as S from './styled';

import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const cards = [1, 2, 3, 4];

function AboutPage() {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.ImageInner>
          <Grid
            item
            md={4}
            sx={{ position: 'relative', zIndex: 1 }}
            maxWidth={500}
          >
            <Typography variant="h2">ReshUCube</Typography>
            <Typography variant="h6">
              Маленький космический кубик с большим исследовательским
              потенциалом
            </Typography>
            <Button
              variant="contained"
              style={{ marginTop: 16 }}
            >
              Смотреть видео
            </Button>
          </Grid>
        </S.ImageInner>
        <S.Image src="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png" />
      </S.ImageContainer>
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
      <Container
        maxWidth="md"
        disableGutters
      >
        <Typography
          variant="h4"
          sx={{ mb: 8 }}
        >
          Спутники
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
              <Card>
                <CardMedia
                  component="img"
                  image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
                  title="Image Title"
                />
                <CardContent className="cardContent">
                  <Typography variant="h5">ReshUCube 1</Typography>
                  <Typography variant="body1">
                    Вы знаете, как важно иметь надежного партнера, который
                    поможет вам решить сложные задачи и достичь поставленных
                    целей. Именно поэтому мы представляем вам ReshuHube - вашего
                    надежного партнера в бизнесе, образовании и личной жизни.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Wrapper>
  );
}

export default AboutPage;
