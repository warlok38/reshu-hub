import React from 'react';
import { Card } from 'shared/components/Card';
import { Actions } from '../Actions';
import { cardsMock } from 'shared/mock/gallery';
import { Grid } from '@mui/material';

export const Cards = () => {
  return (
    <Grid
      container
      spacing={8}
    >
      {cardsMock.map(
        ({
          id,
          title,
          description,
          date,
          image,
          likeCount,
          commentCount,
          hasOwnLike,
          hasOwnComments,
        }) => (
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
          >
            <Card
              key={id}
              title={id + ' ' + title}
              description={description}
              date={date}
              image={image}
              actions={
                <Actions
                  likeCount={likeCount}
                  hasOwnLike={hasOwnLike}
                  commentCount={commentCount}
                  hasOwnComments={hasOwnComments}
                  hasShare
                />
              }
              onClick={() => console.log('click Card id: ' + id)}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
