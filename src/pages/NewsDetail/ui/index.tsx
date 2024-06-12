import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Banner } from 'shared/components/Banner';
import { BookmarkBorderOutlined, ShareOutlined } from '@mui/icons-material';
import * as S from './styled';
import { useGetNewsDetail } from 'features/news/hooks/useGetNewsDetail';
import { useParams } from 'react-router';
import { dateFormat } from 'shared/utils/format';
import { useDeleteNews } from 'features/news/hooks/useDeleteNews';
import { UPLOADS_PATH } from 'shared/constants/path';
import { useRoles } from 'shared/hooks/useRoles';

const NewsDetailPage = () => {
  const { id } = useParams();

  const { detail } = useGetNewsDetail(Number(id));
  const { onDelete } = useDeleteNews();
  const { hasRoles } = useRoles(['admin', 'teacher']);

  if (!detail) {
    return <div>Новость не найдена</div>;
  }

  return (
    <Box>
      {hasRoles && (
        <Stack
          direction="row"
          alignItems="center"
          gap={4}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onDelete({ id: Number(id) })}
          >
            В архив
          </Button>
        </Stack>
      )}
      <Typography
        variant="h1"
        fontSize="44px"
        fontWeight={500}
        mb={8}
      >
        {detail.title}
      </Typography>
      {detail.image && (
        <Banner imageSrc={`${UPLOADS_PATH}${detail.image.fileHash}`} />
      )}
      <Typography
        fontSize="24px"
        mt={8}
      >
        {detail.newsText}
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
            {dateFormat(detail.createDate)}
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
