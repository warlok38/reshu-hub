import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { materialsMock } from 'shared/mocks/materials';
import { MATERIALS_PATH } from 'shared/constants/routePaths';

export const Cards = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={8}
    >
      {materialsMock.map(
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
              onClick={() => navigate(`${MATERIALS_PATH}/${id}`)}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
