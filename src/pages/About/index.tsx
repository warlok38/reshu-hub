import React from 'react';
import * as S from './styled';
import { styled } from '@mui/material/styles';
import { Container, Stack , Paper, Grid, Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';



const cards = [1,2,3,4]

function AboutPage() {
  return<S.Wrapper>
  <>
  <main>
    <Paper style={{backgroundImage: 'url(https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png)'}}>
      <Container>
        <Grid container>
          <Grid item md={4}>
            <div>
                <h1>ReshUCube</h1>
                <h3>Маленький космический кубик с большим исследовательским потенциалом </h3>
                <Button variant="contained" disableElevation>
                  Смотреть видео
                </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    <Grid>
          <div><h1>Зачем нужен ReshUCube?</h1></div>
    </Grid>
    <Container maxWidth="md">
    <Grid container spacing={4}>
      {cards.map((card) =>(
      <Grid item key={card} xs={12} sm={6} md={4}>
            <Typography variant='h5'>
            Современно
            </Typography>
            <Typography variant='h6'>
            Вы знаете, как важно иметь надежного партнера, который поможет вам решить сложные задачи и достичь поставленных целей. Именно поэтому мы представляем вам ReshuHube - вашего надежного партнера в бизнесе, образовании и личной жизни.
            </Typography> 
      </Grid>))}
    </Grid>
    </Container>
    <Grid>
          <div><h1>Спутники</h1></div>
    </Grid>
    <Container maxWidth="md">
    <Grid container spacing={4}>
      {cards.map((card) =>(
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className='card'>
          <CardMedia 
          className='cardMedia'
          image='url(https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png)' 
          title='Image Title'
          />
          <CardContent className='cardContent'>
            <Typography variant='h5'>
            ReshUCube 1
            </Typography>
            <Typography variant='h6'>
            Вы знаете, как важно иметь надежного партнера, который поможет вам решить сложные задачи и достичь поставленных целей. Именно поэтому мы представляем вам ReshuHube - вашего надежного партнера в бизнесе, образовании и личной жизни.
            </Typography>
          </CardContent>
        </Card>  
      </Grid>))}
    </Grid>
    </Container>
  </main>
  </>
  </S.Wrapper>
}

export default AboutPage;