import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { cardsEventsMock } from 'shared/mocks/events';
import { Grid } from '@mui/material';

export const Cards = () => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={8}
      >
        {cardsEventsMock.map(
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
                  <CardActions
                    likeCount={likeCount}
                    hasOwnLike={hasOwnLike}
                    commentCount={commentCount}
                    hasOwnComments={hasOwnComments}
                  />
                }
              />
            </Grid>
          )
        )}
      </Grid>
    </React.Fragment>
  );
};
