import React from 'react';
import * as S from './styled';
import { LikeButton } from 'shared/components/LikeButton';
import { CommentButton } from 'shared/components/CommentButton';
import { ShareButton } from 'shared/components/ShareButton';

type CardActionsProps = {
  likeCount?: number;
  commentCount?: number;
  hasOwnLike?: boolean;
  hasOwnComments?: boolean;
  isLikeVisible?: boolean;
  isCommentsVisible?: boolean;
  isShareVisible?: boolean;
  onCommentsClick?: () => void;
};

export const CardActions = ({
  likeCount,
  commentCount,
  hasOwnLike,
  hasOwnComments,
  isLikeVisible = true,
  isCommentsVisible = true,
  isShareVisible = true,
  onCommentsClick,
}: CardActionsProps) => {
  return (
    <S.Wrapper>
      {isLikeVisible && (
        <LikeButton
          count={likeCount}
          checked={hasOwnLike}
        />
      )}
      {isCommentsVisible && (
        <CommentButton
          count={commentCount}
          hasOwnComments={hasOwnComments}
          onClick={onCommentsClick}
        />
      )}
      {isShareVisible && (
        <ShareButton onClick={() => console.log('click ShareButton')} />
      )}
    </S.Wrapper>
  );
};
