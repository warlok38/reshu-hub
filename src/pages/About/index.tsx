import React from 'react';
import * as S from './styled';

import { Container, Stack , Paper, Grid, Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';



const cards = [1,2,3,4]

function AboutPage() {
  return<S.Wrapper>
  <>
  
    <Paper style={{backgroundImage: 'url(https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png)'}}>
      <Container>
        
          <Grid item md={4}>
           
                <Typography>ReshUCube</Typography>
                <h3>Маленький космический кубик с большим исследовательским потенциалом </h3>
                <Button variant="contained" disableElevation>
                  Смотреть видео
                </Button>
            
          
        </Grid>
      </Container>
    </Paper>
    <Grid>
          <h1>Зачем нужен ReshUCube?</h1>
    </Grid>
    <Container maxWidth="md">
    <Grid container spacing={4}>
      {cards.map((card, index) =>(
      <Grid key={index} xs={12} sm={6} md={4}>
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
          <Typography>Спутники</Typography>
    </Grid>
    <Container maxWidth="md">
    <Grid container spacing={4}>
    {cards.map((card, index) =>(
      <Grid key={index} xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
          component="img"
          image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png" 
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
  
  </>
  </S.Wrapper>
}

export default AboutPage;