import React from 'react';
import * as S from './styled';
import { Typography } from '@mui/material';

type TextContentProps = {
  title: string;
  date?: string;
  place?: string;
  author?: string;
  text?: string;
};

export const TextContent = ({
  title,
  date,
  place,
  author,
  text,
}: TextContentProps) => {
  return (
    <S.Wrapper>
      <Typography variant="h4">{title}</Typography>
      {(date || place) && (
        <S.Description>
          {date && <Typography variant="h6">{date}</Typography>}
          {place && <Typography variant="h6">{place}</Typography>}
        </S.Description>
      )}
      {author && <Typography variant="caption">Автор: {author}</Typography>}
      {text && (
        <Typography
          variant="body1"
          mt={2}
        >
          {text}
        </Typography>
      )}
    </S.Wrapper>
  );
};
