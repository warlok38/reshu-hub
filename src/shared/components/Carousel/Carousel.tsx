import React, { ReactNode } from 'react';
import { isEmpty } from 'lodash';
import { CarouselProps as MUICarouselProps } from 'react-material-ui-carousel/dist/components/types';
import { Box } from '@mui/material';
import { CAROUSEL } from './const';
import * as S from './Carousel.styled';
import { getClassnameByIndicatorVariant } from './utils';
import { Captions } from './Captions';

export type IndicatorVariants = 'default' | 'custom';
export type ImageListType = {
  link: string;
  title?: string;
  description?: string;
}[];

type CarouselProps = {
  list?: ImageListType;
  extra?: ReactNode;
  indicatorVariant?: IndicatorVariants;
} & MUICarouselProps;

export const Carousel = ({
  list,
  extra,
  indicatorVariant = 'default',
  ...props
}: CarouselProps) => {
  const isEmptyOrOne = !list || isEmpty(list) || list.length === 1;

  return (
    <S.Wrapper>
      <S.CarouselWrapper
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
        {...props}
      >
        {list && !isEmpty(list) ? (
          list.map(({ link, title, description }, i) => (
            <>
              <Box
                key={i}
                component="img"
                src={link}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  background: 'linear-gradient(black, transparent)',
                }}
              />
              <Captions
                title={title}
                description={description}
                extra={extra}
              />
            </>
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
    </S.Wrapper>
  );
};
