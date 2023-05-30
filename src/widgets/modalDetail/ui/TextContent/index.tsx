import React from 'react';
import * as S from './styled';
import { Typography } from '@mui/material';
import { TextTruncate } from 'shared/components/TextTruncate';

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
      <TextTruncate
        variant="h4"
        lineCount={3}
      >
        {title}
      </TextTruncate>
      <S.Description>
        <Typography variant="h6">{date}</Typography>
        <Typography variant="h6">{place}</Typography>
      </S.Description>
      <Typography variant="caption">Автор: {author}</Typography>
      <Typography
        variant="body1"
        mt={2}
      >
        {text}
      </Typography>
    </S.Wrapper>
  );
};
