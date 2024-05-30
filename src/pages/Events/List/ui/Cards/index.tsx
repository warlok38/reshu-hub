import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { Grid, Popover } from '@mui/material';
import { eventsMock } from 'shared/mocks/events';
import { EVENTS_PATH } from 'shared/constants/routePaths';
import { useNavigate } from 'react-router';
import { useShare } from 'widgets/share/hooks/useShare';
import { ROOT_URL } from 'shared/api/http/consts';
import { Share } from 'widgets/share';

type CardsProps = {
  list: typeof eventsMock.actual | typeof eventsMock.past;
};

export const Cards = ({ list }: CardsProps) => {
  const navigate = useNavigate();
  const {
    state: shareState,
    onOpen: onOpenShare,
    onClose: onCloseShare,
  } = useShare();

  return (
    <Grid
      container
      spacing={8}
    >
      {list.map(
        ({
          id,
          title,
          description,
          date,
          image,
          likeCount,
          commentCount,
          hasOwnLike,
          hasOwnComments,
        }) => (
          <Grid
            key={id}
            item
            md={4}
            sm={6}
            xs={12}
          >
            <Card
              title={title}
              description={description}
              date={date}
              image={image}
              linkProps={{ to: `${EVENTS_PATH}/${id}` }}
              actions={
                <CardActions
                  likeCount={likeCount}
                  hasOwnLike={hasOwnLike}
                  commentCount={commentCount}
                  hasOwnComments={hasOwnComments}
                  onCommentsClick={() =>
                    navigate(`${EVENTS_PATH}/${id}`, {
                      state: { targetId: 'event__comment-input' },
                    })
                  }
                  onShareButtonClick={(event) => onOpenShare(event, id)}
                />
              }
            />
          </Grid>
        )
      )}
      <Popover
        open={Boolean(shareState.anchor)}
        onClose={onCloseShare}
        anchorEl={shareState.anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Share url={`${ROOT_URL}/${EVENTS_PATH}/${shareState.id}`} />
      </Popover>
    </Grid>
  );
};
