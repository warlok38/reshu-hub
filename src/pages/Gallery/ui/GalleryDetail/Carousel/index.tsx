import React from 'react';
import { isEmpty } from 'lodash';
import { CarouselProps as MUICarouselProps } from 'react-material-ui-carousel/dist/components/types';
import { Box } from '@mui/material';
import * as S from './styled';

type CarouselProps = {
  list?: { link: string }[];
} & MUICarouselProps;

export const Carousel = ({ list, ...props }: CarouselProps) => {
  const isEmptyOrOne = !list || isEmpty(list) || list.length === 1;

  return (
    <S.Wrapper
      {...props}
      autoPlay={false}
      className="gallery__carousel"
      indicatorContainerProps={{
        className: 'gallery__carousel-indicator-container',
      }}
      activeIndicatorIconButtonProps={{
        className: 'gallery__carousel-indicator-button--active',
      }}
      indicatorIconButtonProps={{
        className: 'gallery__carousel-indicator-button',
      }}
      IndicatorIcon={<S.Indicator />}
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
    </S.Wrapper>
  );
};
