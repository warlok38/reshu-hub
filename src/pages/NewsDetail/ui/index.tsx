import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { news } from 'shared/mocks/news';
import { Banner } from 'shared/components/Banner';
import { BookmarkBorderOutlined, ShareOutlined } from '@mui/icons-material';
import * as S from './styled';

const NewsDetailPage = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        gap={4}
      >
        <Button
          variant="outlined"
          color="secondary"
        >
          В архив
        </Button>
        <Button
          variant="outlined"
          color="secondary"
        >
          Удалить новость
        </Button>
      </Stack>
      <Typography
        variant="h1"
        fontSize="44px"
        fontWeight={500}
        mb={8}
      >
        {news.title}
      </Typography>
      <Banner imageSrc={news.image.url} />
      <Typography
        fontSize="24px"
        mt={8}
      >
        {news.content}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
      >
        <Stack></Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Typography
            pt={1}
            textAlign="end"
            variant="subtitle1"
            color="rgba(0,0,0, 0.42)"
            fontSize="20px"
            fontWeight={500}
          >
            {news.updatedAt}
          </Typography>
          <S.IconButton>
            <ShareOutlined />
          </S.IconButton>
          <S.IconButton>
            <BookmarkBorderOutlined />
          </S.IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewsDetailPage;
