import React, { useState } from 'react';
import { Card } from 'shared/components/Card';
import { Actions } from '../Actions';
import { cardsGalleryMock, galleryDetailMock } from 'shared/mock/gallery';
import { Grid } from '@mui/material';
import { ModalDetail } from 'widgets/modalDetail';

export const Cards = () => {
  const [activeGalleryId, _setActiveGalleryId] = useState<number | undefined>();
  const detail = galleryDetailMock;

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

      <ModalDetail
        open={!!activeGalleryId}
        onClose={resetActiveGalleryId}
        images={detail.images}
        title={detail.title}
        text={detail.text}
        date={detail.date}
        author={detail.author}
        place={detail.place}
      />
    </React.Fragment>
  );
};
