import React from 'react';
import * as S from './styled';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
    <S.Wrapper>
      {iconByType[type as 'video' | 'pdf']}
      <S.Title>{name}</S.Title>
      {size && <S.Size>{normalizeSize(size)}</S.Size>}
    </S.Wrapper>
  );
};
