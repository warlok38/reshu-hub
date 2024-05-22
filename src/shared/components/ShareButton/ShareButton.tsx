import React from 'react';
import { Share } from '@mui/icons-material';
import * as S from './ShareButton.styled';
import { IconButtonProps } from '@mui/material';

type ShareButtonProps = IconButtonProps;

export const ShareButton = ({ ...props }: ShareButtonProps) => {
  const clickStopPropagationHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onClick={clickStopPropagationHandler}>
      <S.IconButton {...props}>
        <Share />
      </S.IconButton>
    </div>
  );
};
