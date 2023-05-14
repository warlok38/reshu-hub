import * as S from './styled';
import { Grid } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface BannerProps {
  imageSrc: string;
  children?: ReactNode;
}

export const Banner: FC<BannerProps> = ({ imageSrc, children }) => {
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
