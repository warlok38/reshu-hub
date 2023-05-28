import React from 'react';
import { Share } from '@mui/icons-material';
import * as S from './ShareButton.styled';
import { IconButtonProps } from '@mui/material';

type ShareButtonProps = IconButtonProps;

export const ShareButton = ({ ...props }: ShareButtonProps) => {
  return (
    <S.Wrapper {...props}>
      <Share />
    </S.Wrapper>
  );
};
