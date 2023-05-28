import React from 'react';
import * as S from './styled';
import { LikeButton } from 'shared/components/LikeButton';
import { CommentButton } from 'shared/components/CommentButton';
import { ShareButton } from 'shared/components/ShareButton';

type ActionsProps = {
  likeCount?: number;
  commentCount?: number;
  hasShare?: boolean;
  hasOwnLike?: boolean;
  hasOwnComments?: boolean;
};

export const Actions = ({
  likeCount,
  commentCount,
  hasShare,
  hasOwnLike,
  hasOwnComments,
}: ActionsProps) => {
  return (
    <S.Wrapper>
      <LikeButton
        count={likeCount}
        checked={hasOwnLike}
      />
      <CommentButton
        count={commentCount}
        hasOwnComments={hasOwnComments}
        onClick={() => console.log('click CommentButton')}
      />
      {hasShare && (
        <ShareButton onClick={() => console.log('click ShareButton')} />
      )}
    </S.Wrapper>
  );
};
