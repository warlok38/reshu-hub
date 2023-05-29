import React, { useState } from 'react';
import { Card } from 'shared/components/Card';
import { Actions } from '../Actions';
import { cardsGalleryMock } from 'shared/mock/gallery';
import { Grid } from '@mui/material';
import { GalleryDetail } from '../GalleryDetail';

export const Cards = () => {
  const [activeGalleryId, _setActiveGalleryId] = useState<number | undefined>();

  const setActiveGalleryId = (id: number) => {
    _setActiveGalleryId(id);
  };

  const resetActiveGalleryId = () => {
    _setActiveGalleryId(undefined);
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={8}
      >
        {cardsGalleryMock.map(
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
                onClick={() => setActiveGalleryId(id)}
              />
            </Grid>
          )
        )}
      </Grid>

      <GalleryDetail
        open={!!activeGalleryId}
        onClose={resetActiveGalleryId}
      />
    </React.Fragment>
  );
};
