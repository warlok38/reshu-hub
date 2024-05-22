import React, { ReactNode } from 'react';
import { Link, CardProps as MUICardProps, Typography } from '@mui/material';
import * as S from './Card.styled';
import { TextTruncate } from '../TextTruncate';
import { Link as RRLink, LinkProps as RRLinkProps } from 'react-router-dom';

export type CardProps = {
  title: string;
  description?: string;
  date?: string;
  image?: string;
  actions?: ReactNode;
  linkProps?: RRLinkProps;
} & MUICardProps;

export const Card = ({
  title,
  description,
  date,
  image,
  actions,
  linkProps,
  ...props
}: CardProps) => {
  const renderCard = () => (
    <S.Wrapper {...props}>
      <S.Media image={image} />
      <S.Container>
        <S.Content>
          <TextTruncate
            variant="h5"
            lineCount={2}
          >
            {title}
          </TextTruncate>
          {date && <Typography variant="body2">{date}</Typography>}
          {description && (
            <TextTruncate
              variant="body2"
              color="text.secondary"
              lineCount={3}
            >
              {description}
            </TextTruncate>
          )}
        </S.Content>
        {actions && <S.Actions>{actions}</S.Actions>}
      </S.Container>
    </S.Wrapper>
  );

  return linkProps?.to ? (
    <Link
      component={RRLink}
      underline="none"
      {...linkProps}
    >
      {renderCard()}
    </Link>
  ) : (
    renderCard()
  );
};
