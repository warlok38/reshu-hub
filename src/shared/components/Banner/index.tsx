import * as S from './styled';
import { Grid } from '@mui/material';
import React, { ReactNode } from 'react';

type BannerProps = {
  imageSrc: string;
  children?: ReactNode;
};

export const Banner = ({ imageSrc, children }: BannerProps) => {
  return (
    <S.ImageContainer>
      <S.ImageInner>
        <Grid
          item
          md={4}
          sx={{ position: 'relative', zIndex: 1 }}
          maxWidth={500}
        >
          {children}
        </Grid>
      </S.ImageInner>
      <S.Image src={imageSrc} />
    </S.ImageContainer>
  );
};
