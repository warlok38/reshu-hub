import React from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CheckboxProps } from '@mui/material';
import * as S from './LikeButton.styled';

type LikeButtonProps = {
  count?: number;
} & CheckboxProps;

export const LikeButton = ({ count = 0, ...props }: LikeButtonProps) => {
  const clickStopPropagationHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <S.Wrapper onClick={clickStopPropagationHandler}>
      <S.Checkbox
        {...props}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <S.Count>{count}</S.Count>
    </S.Wrapper>
  );
};
