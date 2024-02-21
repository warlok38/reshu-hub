import React from 'react';
import { CardActions } from '@mui/material';
import { ShareButton } from 'shared/components/ShareButton';
import { LikeButton } from 'shared/components/LikeButton';

export const NewsCardActions = () => {
  return (
    <CardActions sx={{ columnGap: '4px', paddingLeft: '16px' }}>
      <LikeButton />
      <ShareButton />
    </CardActions>
  );
};
