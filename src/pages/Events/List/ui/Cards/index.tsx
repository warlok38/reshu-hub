import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { Grid } from '@mui/material';
import { eventsMock } from 'shared/mocks/events';
import { EVENTS_PATH } from 'shared/constants/routePaths';
import { useNavigate } from 'react-router';

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
            key={id}
            item
            md={4}
            sm={6}
            xs={12}
          >
            <Card
              title={title}
              description={description}
              date={date}
              image={image}
              linkProps={{ to: `${EVENTS_PATH}/${id}` }}
              actions={
                <CardActions
                  likeCount={likeCount}
                  hasOwnLike={hasOwnLike}
                  commentCount={commentCount}
                  hasOwnComments={hasOwnComments}
                  onCommentsClick={() =>
                    navigate(`${EVENTS_PATH}/${id}`, {
                      state: { targetId: 'event__comment-input' },
                    })
                  }
                />
              }
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
