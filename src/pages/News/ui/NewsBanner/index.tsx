import React from 'react';
import { Stack, Typography } from '@mui/material';
import * as S from './styled';
import { ArrowRight } from '@mui/icons-material';
import { Banner } from 'shared/components/Banner';

type NewsBannerProps = {
  imageSrc: string;
  title: string;
  description: string;
  newsId: number;
};

export const NewsBanner = ({
  imageSrc,
  title,
  description,
  newsId,
}: NewsBannerProps) => {
  return (
    <Banner imageSrc={imageSrc}>
      <Stack
        direction="column"
        spacing={4}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
        <S.ButtonDetail
          variant="contained"
          endIcon={<ArrowRight />}
          style={{ width: 'fit-content' }}
        >
          <S.LinkToDetail to={`/${newsId}`}>подробнее</S.LinkToDetail>
        </S.ButtonDetail>
      </Stack>
    </Banner>
  );
};
