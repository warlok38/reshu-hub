import React, { ReactNode } from 'react';
import { isEmpty } from 'lodash';
import { CarouselProps as MUICarouselProps } from 'react-material-ui-carousel/dist/components/types';
import { Box } from '@mui/material';
import { CAROUSEL } from './const';
import * as S from './Carousel.styled';
import { getClassnameByIndicatorVariant } from './utils';
import { TextTruncate } from '../TextTruncate';
import { Captions } from './Captions';

export type IndicatorVariants = 'default' | 'custom';
export type ImageListType = { link: string }[];

type CarouselProps = {
  list?: ImageListType;
  title?: string;
  description?: string;
  extra?: ReactNode;
  indicatorVariant?: IndicatorVariants;
} & MUICarouselProps;

export const Carousel = ({
  list,
  title,
  description,
  extra,
  indicatorVariant = 'default',
  ...props
}: CarouselProps) => {
  const isEmptyOrOne = !list || isEmpty(list) || list.length === 1;

  return (
    <S.Wrapper>
      <S.CarouselWrapper
        {...props}
        autoPlay={false}
        className={CAROUSEL}
        indicatorContainerProps={{
          className: getClassnameByIndicatorVariant(indicatorVariant).container,
        }}
        activeIndicatorIconButtonProps={{
          className:
            getClassnameByIndicatorVariant(indicatorVariant).buttonActive,
        }}
        indicatorIconButtonProps={{
          className: getClassnameByIndicatorVariant(indicatorVariant).button,
        }}
        IndicatorIcon={
          indicatorVariant === 'custom' ? <S.Indicator /> : undefined
        }
        indicators={!isEmptyOrOne}
        navButtonsAlwaysInvisible={isEmptyOrOne}
        height="100%"
      >
        {list && !isEmpty(list) ? (
          list.map(({ link }, i) => (
            <Box
              key={i}
              component="img"
              src={link}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ))
        ) : (
          <Box
            component="div"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.text.disabled,
              width: '100%',
              height: '100%',
            })}
          >
            Нет фотографий
          </Box>
        )}
      </S.CarouselWrapper>
      <Captions
        title={title}
        description={description}
        extra={extra}
      />
    </S.Wrapper>
  );
};
