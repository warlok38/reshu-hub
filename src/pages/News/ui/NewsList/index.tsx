import React from 'react';
import { Grid, Popover } from '@mui/material';
import { NewsEntity } from 'shared/models/news';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { dateFormat } from 'shared/utils/format';
import { Share } from 'widgets/share';
import { useShare } from 'widgets/share/hooks/useShare';
import {
  PROD_HOSTNAME,
  PROD_PROTOCOL,
  UPLOADS_PATH,
} from 'shared/constants/path';
import { routeCodesEnum } from 'shared/constants/routeCodes';

type NewsListProps = {
  newsList: NewsEntity[];
  styleGrid?: React.CSSProperties;
};

export const NewsList = ({ newsList, styleGrid }: NewsListProps) => {
  const {
    state: shareState,
    onOpen: onOpenShare,
    onClose: onCloseShare,
  } = useShare();

  return (
    <Grid
      container
      spacing={8}
      style={{ ...styleGrid }}
    >
      {newsList.map((news) => (
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          key={news.id}
        >
          <Card
            title={news.title}
            description={news.newsText}
            date={dateFormat(news.createDate)}
            image={
              news.image ? `${UPLOADS_PATH}${news.image.fileHash}` : undefined
            }
            linkProps={{ to: `/${routeCodesEnum.Enum.news}/${news.id}` }}
            actions={
              <CardActions
                likeCount={0}
                isCommentsVisible={false}
                onShareButtonClick={(event) => onOpenShare(event, news.id)}
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
          url={`${PROD_PROTOCOL}://${PROD_HOSTNAME}/${routeCodesEnum.Enum.news}/${shareState.id}`}
        />
      </Popover>
    </Grid>
  );
};
