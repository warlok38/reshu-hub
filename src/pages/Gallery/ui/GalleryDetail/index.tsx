import React from 'react';
import { DialogProps } from '@mui/material';
import { GalleryContent } from './GalleryContent';
import { galleryDetailMock } from 'shared/mock/gallery';
import Scrollbars from 'react-custom-scrollbars';
import { Close } from '@mui/icons-material';
import * as S from './styled';
import { Carousel } from './Carousel';

type GalleryDetailProps = {
  onClose: () => void;
} & DialogProps;

export const GalleryDetail = ({ onClose, ...props }: GalleryDetailProps) => {
  const detail = galleryDetailMock;

  return (
    <S.Dialog
      {...props}
      className="gallery-detail"
    >
      <S.Wrapper>
        <Carousel list={detail.list} />
        <S.Container>
          <Scrollbars renderThumbVertical={() => <S.Thumb />}>
            <GalleryContent
              title={detail.title}
              date={detail.date}
              place={detail.place}
              author={detail.author}
              text={detail.text}
            />
          </Scrollbars>
          <S.Actions />
        </S.Container>
      </S.Wrapper>

      <S.CloseButton onClick={onClose}>
        <Close />
      </S.CloseButton>
    </S.Dialog>
  );
};
