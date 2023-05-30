import { styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {
  CAROUSEL_INDICATORS_CONTAINER,
  CAROUSEL_INDICATORS_CONTAINER_CUSTOM,
  CAROUSEL_INDICATOR_BUTTON,
  CAROUSEL_INDICATOR_BUTTON_ACTIVE,
  CAROUSEL_INDICATOR_BUTTON_CUSTOM,
  CAROUSEL_INDICATOR_BUTTON_CUSTOM_ACTIVE,
} from './const';

export const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CarouselWrapper = styled(Carousel)`
  width: 100%;
  height: 100%;
  border-radius: 28px;

  .${CAROUSEL_INDICATORS_CONTAINER}, .${CAROUSEL_INDICATORS_CONTAINER_CUSTOM} {
    z-index: 1;
    position: absolute;
    margin: 0;
  }
  .${CAROUSEL_INDICATORS_CONTAINER} {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ theme }) => theme.spacing(4)};
    bottom: ${({ theme }) => theme.spacing(4)};
  }

  .${CAROUSEL_INDICATOR_BUTTON} {
    color: ${({ theme }) => theme.palette.primary.main};
    svg {
      opacity: 0.7;
    }
  }

  .${CAROUSEL_INDICATOR_BUTTON_ACTIVE} {
    color: ${({ theme }) => theme.palette.primary.main};
    svg {
      opacity: 1;
    }
  }

  .${CAROUSEL_INDICATORS_CONTAINER_CUSTOM} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    bottom: 0;
  }

  .${CAROUSEL_INDICATOR_BUTTON_CUSTOM} {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    opacity: 0.5;

    border-radius: 5px 5px 0 0;
    :first-child {
      border-top-left-radius: 0;
    }
    :last-child {
      border-top-right-radius: 0;
    }
    :hover {
      background-color: ${({ theme }) => theme.palette.primary.contrastText};
      opacity: 0.4;
    }
  }

  .${CAROUSEL_INDICATOR_BUTTON_CUSTOM_ACTIVE} {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    :hover {
      background-color: ${({ theme }) => theme.palette.secondary.main};
      opacity: 0.85;
    }
    opacity: 1;
  }
`;

export const Indicator = styled('span')`
  width: 100%;
  height: ${({ theme }) => theme.spacing(7)};
`;
