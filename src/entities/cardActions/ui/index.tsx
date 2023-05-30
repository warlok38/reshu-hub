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
  renderLike?: boolean;
  renderComments?: boolean;
  renderShare?: boolean;
};

export const CardActions = ({
  likeCount,
  commentCount,
  hasOwnLike,
  hasOwnComments,
  renderLike = true,
  renderComments = true,
  renderShare = true,
}: CardActionsProps) => {
  return (
    <S.Wrapper>
      {renderLike && (
        <LikeButton
          count={likeCount}
          checked={hasOwnLike}
        />
      )}
      {renderComments && (
        <CommentButton
          count={commentCount}
          hasOwnComments={hasOwnComments}
          onClick={() => console.log('click CommentButton')}
        />
      )}
      {renderShare && (
        <ShareButton onClick={() => console.log('click ShareButton')} />
      )}
    </S.Wrapper>
  );
};
