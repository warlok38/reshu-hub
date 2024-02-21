import React from 'react';
import * as S from './styled';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack } from '@mui/material';
import { Delete } from '@mui/icons-material';

type MaterialProps = {
  id: number;
  name: string;
  type: string;
  size: number;
};

export const Material = ({ id, name, type, size }: MaterialProps) => {
  const iconByType = {
    video: <YouTubeIcon color="error" />,
    pdf: <PictureAsPdfIcon color="secondary" />,
  };

  const normalizeSize = (size: number) => {
    if (Number(size) < 1000) {
      return `${size}КБ`;
    }
    return `${size / 1000}МБ`;
  };

  return (
    <S.Row>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={4}
          sx={{ cursor: 'pointer' }}
        >
          {iconByType[type as 'video' | 'pdf']}
          <S.Title>{name}</S.Title>
          {size && <S.Size>{normalizeSize(size)}</S.Size>}
        </Stack>
        <IconButton>
          <Delete />
        </IconButton>
      </Stack>
    </S.Row>
  );
};
