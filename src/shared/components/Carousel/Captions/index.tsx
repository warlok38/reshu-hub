import React, { ReactNode } from 'react';
import * as S from './styled';
import { Typography } from '@mui/material';

type CaptionProps = {
  title?: string;
  description?: string;
  extra?: ReactNode;
};

export const Captions = ({ title, description, extra }: CaptionProps) => {
  if (!title && !description && !extra) {
    return null;
  }
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        {title && (
          <Typography
            variant="h3"
            fontWeight={700}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            variant="body1"
            fontWeight={700}
            maxWidth="80%"
          >
            {description}
          </Typography>
        )}
      </S.TitleWrapper>

      {extra && <S.Extra>{extra}</S.Extra>}
    </S.Wrapper>
  );
};
