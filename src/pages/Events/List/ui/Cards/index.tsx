import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { Grid } from '@mui/material';
import { headerRoutes } from 'shared/models';
import { useNavigate } from 'react-router';
import { eventsMock } from 'shared/mocks/events';

type CardsProps = {
  list: typeof eventsMock.actual | typeof eventsMock.past;
};

export const Cards = ({ list }: CardsProps) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={8}
    >
      {list.map(
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
              title={title}
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
              onClick={() => navigate(`${headerRoutes.events.path}/${id}`)}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
