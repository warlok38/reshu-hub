import React from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CheckboxProps } from '@mui/material';
import * as S from './LikeButton.styled';

type LikeButtonProps = {
  count?: number;
} & CheckboxProps;

export const LikeButton = ({ count = 0, ...props }: LikeButtonProps) => {
  return (
    <S.Wrapper>
      <S.Checkbox
        {...props}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <S.Count>{count}</S.Count>
    </S.Wrapper>
  );
};
