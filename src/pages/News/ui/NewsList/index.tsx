import React from 'react';
import { Grid } from '@mui/material';
import { NewsEntity } from 'shared/models/news';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { dateFormat } from 'shared/utils/format';
import { NEWS_PATH } from 'shared/constants/routePaths';

type NewsListProps = {
  newsList: NewsEntity[];
  styleGrid?: React.CSSProperties;
};

export const NewsList = ({ newsList, styleGrid }: NewsListProps) => {
  return (
    <Grid
      container
      spacing={8}
      style={{ ...styleGrid }}
    >
      {newsList.map((news) => (
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          key={news.id}
        >
          <Card
            title={news.title}
            description={news.newsText}
            date={dateFormat(news.createDate)}
            image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
            linkProps={{ to: `${NEWS_PATH}/${news.id}` }}
            actions={
              <CardActions
                likeCount={0}
                isCommentsVisible={false}
              />
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};
