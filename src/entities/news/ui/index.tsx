import React from 'react';
import * as S from './styled';
import { Card, CardMedia, Stack } from '@mui/material';
import { NewsCardContent } from './NewsCardContent';
import { NewsCardActions } from './NewsCardActions';
import { Link } from 'react-router-dom';
import { News } from 'shared/mocks/news';
import { routeCodesEnum } from 'shared/constants/routeCodes';

type NewsCardProps = {
  news: News;
};

export const NewsCard = ({ news }: NewsCardProps) => {
  const { id } = news;

  return (
    <Card
      sx={{
        borderRadius: '20px',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.16);',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={`${routeCodesEnum.enum.news}/${news.id}`}>
        <CardMedia
          sx={{ height: '300px', width: '100%' }}
          component="img"
          image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
          title="Image Title"
        />
      </Link>
      <NewsCardContent />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <NewsCardActions />
        <S.Date>08.04.2023</S.Date>
      </Stack>
    </Card>
  );
};
