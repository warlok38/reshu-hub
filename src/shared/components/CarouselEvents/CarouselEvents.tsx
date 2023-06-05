import React from 'react';
import { Grid, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const images = [
  {
    src: 'https://via.placeholder.com/1290x700/FF5733/FFFFFF',
    alt: 'image 1',
  },
  {
    src: 'https://via.placeholder.com/1290x700/C70039/FFFFFF',
    alt: 'image 2',
  },
  {
    src: 'https://via.placeholder.com/1290x700/900C3F/FFFFFF',
    alt: 'image 3',
  },
];
export function CarouselEvents() {
  const paperStyle = {
    borderRadius: '20px',
    width: '100%',
    height: '100%',
  };
  const imgStyle = {
    display: 'flex',
    margin: 'auto',
  };
  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Carousel
          sx={{
            borderRadius: '40px',
            position: 'relative',
            bottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            zIndex: '1',
            mb: '32px',
          }}
        >
          {images.map((image) => (
            <Paper
              sx={{ position: 'relative' }}
              key={image.alt}
              style={paperStyle}
            >
              <img
                src={image.src}
                alt={image.alt}
                width="auto"
                height="auto"
                style={imgStyle}
              />
            </Paper>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
