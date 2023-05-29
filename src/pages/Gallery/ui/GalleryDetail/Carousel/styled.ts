import { styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export const Wrapper = styled(Carousel)`
  width: 710px;
  border-radius: 28px;

  .gallery__carousel-indicator-container {
    z-index: 1;
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    margin: 0;
  }

  .gallery__carousel-indicator-button {
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

  .gallery__carousel-indicator-button--active {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    :hover {
      background-color: ${({ theme }) => theme.palette.secondary.main};
      opacity: 0.85;
    }
    opacity: 1;
  }

  //TODO временное решение из за косяка плагина.
  //После фикса раскоментить код ниже
  ${({ theme }) => `
   @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    width: 510px;
   }
  `}/* @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    width: 510px;
  } */
`;

export const Indicator = styled('span')`
  width: 100%;
  height: ${({ theme }) => theme.spacing(7)};
`;
