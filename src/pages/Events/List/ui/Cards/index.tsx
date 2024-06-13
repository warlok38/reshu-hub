import React from 'react';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { Grid, Popover } from '@mui/material';
import { eventsMock } from 'shared/mocks/events';
import { useNavigate } from 'react-router';
import { useShare } from 'widgets/share/hooks/useShare';
import { Share } from 'widgets/share';
import { PROD_HOSTNAME, PROD_PROTOCOL } from 'shared/constants/path';
import { routeCodesEnum } from 'shared/constants/routeCodes';
import { EventsList } from 'shared/models/events';
import { dateFormat } from 'shared/utils/format';

type CardsProps = {
  list: EventsList;
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
      {list.map(({ id, name, subtitle, eventsType, dateStart, dateEnd }) => (
        <Grid
          key={id}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Card
            title={`${eventsType.name} ${name}`}
            description={subtitle || undefined}
            date={`С ${dateFormat(dateStart)} по ${dateFormat(dateEnd)}`}
            image={eventsMock.actual[id].image}
            linkProps={{ to: `/${routeCodesEnum.Enum.events}/${id}` }}
            actions={
              <CardActions
                commentCount={2}
                onCommentsClick={() =>
                  navigate(`/${routeCodesEnum.Enum.events}/${id}`, {
                    state: { targetId: 'event__comment-input' },
                  })
                }
                onShareButtonClick={(event) => onOpenShare(event, id)}
              />
            }
          />
        </Grid>
      ))}
      <Popover
        open={Boolean(shareState.anchor)}
        onClose={onCloseShare}
        anchorEl={shareState.anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Share
          url={`${PROD_PROTOCOL}://${PROD_HOSTNAME}/${routeCodesEnum.Enum.events}/${shareState.id}`}
        />
      </Popover>
    </Grid>
  );
};
