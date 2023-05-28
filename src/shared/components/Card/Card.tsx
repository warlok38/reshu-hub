import React, { ReactNode } from 'react';
import { CardProps as MUICardProps, Typography } from '@mui/material';
import * as S from './Card.styled';
import { TextTruncate } from '../TextTruncate';

export type CardProps = {
  title: string;
  description?: string;
  date?: string;
  image?: string;
  actions?: ReactNode;
  onClick?: () => void;
} & MUICardProps;

export const Card = ({
  title,
  description,
  date,
  image,
  actions,
  onClick,
  ...props
}: CardProps) => {
  return (
    <S.Wrapper {...props}>
      <S.Media
        image={image}
        onClick={onClick}
      />
      <S.Container>
        <S.Content>
          <TextTruncate
            variant="h5"
            lineCount={2}
          >
            {title}
          </TextTruncate>
          <Typography variant="body2">{date}</Typography>
          <TextTruncate
            variant="body2"
            color="text.secondary"
            lineCount={3}
          >
            {description}
          </TextTruncate>
        </S.Content>
        {actions && <S.Actions>{actions}</S.Actions>}
      </S.Container>
    </S.Wrapper>
  );
};
