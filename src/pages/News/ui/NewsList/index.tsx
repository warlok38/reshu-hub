import React from 'react';
import { Button, Grid } from '@mui/material';
import { NewsCard } from 'entities/news';
import { News } from 'shared/mocks/news';

type NewsListProps = {
  styleGrid?: React.CSSProperties;
};

export const NewsList = ({ styleGrid }: NewsListProps) => {
  return (
    <Grid
      container
      spacing={8}
      style={{ ...styleGrid, justifyContent: 'center' }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          key={index}
        >
          <NewsCard news={{ id: index } as News} />
        </Grid>
      ))}
      <Button
        variant="contained"
        style={{ margin: '32px 0', borderRadius: '20px' }}
      >
        Показать ещё
      </Button>
    </Grid>
  );
};
