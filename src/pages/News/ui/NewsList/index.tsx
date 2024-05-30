import React from 'react';
import { Grid, Popover } from '@mui/material';
import { NewsEntity } from 'shared/models/news';
import { Card } from 'shared/components/Card';
import { CardActions } from 'entities/cardActions';
import { dateFormat } from 'shared/utils/format';
import { NEWS_PATH } from 'shared/constants/routePaths';
import { Share } from 'widgets/share';
import { ROOT_URL } from 'shared/api/http/consts';
import { useShare } from 'widgets/share/hooks/useShare';

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
            image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
            linkProps={{ to: `${NEWS_PATH}/${news.id}` }}
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
        <Share url={`${ROOT_URL}/${NEWS_PATH}/${shareState.id}`} />
      </Popover>
    </Grid>
  );
};
