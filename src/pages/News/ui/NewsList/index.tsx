import React, { FC } from 'react';
import { Button, Grid } from '@mui/material';
import { NewsCard } from 'entities/news';

interface NewsListProps {
  styleGrid?: React.CSSProperties;
}

export const NewsList: FC<NewsListProps> = ({ styleGrid }) => {
  return (
    <Grid
      container
      spacing={{ xs: '32px' }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ ...styleGrid, justifyContent: 'center' }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid
          item
          xs={3}
          sm={4}
          md={4}
          key={index}
        >
          <NewsCard />
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
