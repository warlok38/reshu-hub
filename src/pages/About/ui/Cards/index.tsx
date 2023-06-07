import React, { useState } from 'react';
import { Card } from 'shared/components/Card';
import { Grid } from '@mui/material';
import { ModalDetail } from 'widgets/modalDetail';
import { aboutDetailMock, aboutMock } from 'shared/mocks/about';

export const Cards = () => {
  const [activeAboutId, _setActiveAboutId] = useState<number | undefined>();
  const detail = aboutDetailMock;

  const setActiveAboutId = (id: number) => {
    _setActiveAboutId(id);
  };

  const resetActiveAboutId = () => {
    _setActiveAboutId(undefined);
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={8}
      >
        {aboutMock.map(({ id, title, description, image }) => (
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
              image={image}
              onClick={() => setActiveAboutId(id)}
            />
          </Grid>
        ))}
      </Grid>

      <ModalDetail
        open={!!activeAboutId}
        onClose={resetActiveAboutId}
        images={detail.images}
        title={detail.title}
        text={detail.text}
      />
    </React.Fragment>
  );
};
