import React from 'react';
import { Textsms, TextsmsOutlined } from '@mui/icons-material';
import * as S from './CommentButton.styled';
import { IconButtonProps } from '@mui/material';

type CommentButtonProps = {
  count?: number;
  hasOwnComments?: boolean;
  iconButtonProps?: IconButtonProps;
  onClick: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const CommentButton = ({
  count = 0,
  hasOwnComments,
  onClick,
  iconButtonProps,
  ...props
}: CommentButtonProps) => {
  return (
    <S.Wrapper {...props}>
      <S.IconButton
        {...iconButtonProps}
        onClick={onClick}
      >
        {hasOwnComments ? <Textsms /> : <TextsmsOutlined />}
      </S.IconButton>
      <S.Count>{count}</S.Count>
    </S.Wrapper>
  );
};
