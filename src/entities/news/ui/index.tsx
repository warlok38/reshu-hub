import React from 'react';
import * as S from './styled';
import { Card, CardMedia, Stack } from '@mui/material';
import { NewsCardContent } from './NewsCardContent';
import { NewsCardActions } from './NewsCardActions';
import { Link } from 'react-router-dom';
import { News } from 'shared/mocks/news';
import { NEWS_PATH } from 'shared/constants/routePaths';
import { NewsEntity } from 'shared/models/news';
import { dateFormat } from 'shared/utils/format';

type NewsCardProps = {
  news: NewsEntity;
};

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: '20px',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.16);',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={`${NEWS_PATH}/${news.id}`}>
        <CardMedia
          sx={{ height: '300px', width: '100%' }}
          component="img"
          image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
          title="Image Title"
        />
      </Link>
      <NewsCardContent
        title={news.title}
        text={news.newsText}
        category={news.category}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <NewsCardActions />
        <S.Date>{dateFormat(news.createDate)}</S.Date>
      </Stack>
    </Card>
  );
};
