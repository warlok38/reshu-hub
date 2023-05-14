import React from 'react';
import * as S from './styled';
import { CardActions } from '@mui/material';
import { BookmarkBorderOutlined, ShareOutlined } from '@mui/icons-material';

export const NewsCardActions = () => {
  return (
    <CardActions sx={{ columnGap: '4px', paddingLeft: '16px' }}>
      <S.Eye />
      <S.NumberViews>2K</S.NumberViews>
      <S.IconButton>
        <BookmarkBorderOutlined />
      </S.IconButton>
      <S.IconButton>
        <ShareOutlined />
      </S.IconButton>
    </CardActions>
  );
};
