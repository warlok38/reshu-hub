import React from 'react';
import { DialogProps } from '@mui/material';
import { TextContent } from './TextContent';
import Scrollbars from 'react-custom-scrollbars';
import { Close } from '@mui/icons-material';
import { Carousel, ImageListType } from 'shared/components/Carousel';
import * as S from './styled';
import { isEmpty } from 'lodash';

type modalDetailProps = {
  images?: ImageListType;
  title: string;
  date?: string;
  place?: string;
  author?: string;
  text: string;
  onClose: () => void;
} & DialogProps;

export const ModalDetail = ({
  images,
  title,
  date,
  place,
  author,
  text,
  onClose,
  ...props
}: modalDetailProps) => {
  return (
    <S.Dialog {...props}>
      <S.Wrapper>
        {!isEmpty(images) && (
          <Carousel
            list={images}
            indicatorVariant="custom"
          />
        )}
        <S.Container onlyText={isEmpty(images)}>
          <Scrollbars renderThumbVertical={() => <S.Thumb />}>
            <TextContent
              title={title}
              date={date}
              place={place}
              author={author}
              text={text}
            />
          </Scrollbars>
        </S.Container>
      </S.Wrapper>

      <S.CloseButton onClick={onClose}>
        <Close />
      </S.CloseButton>
    </S.Dialog>
  );
};
