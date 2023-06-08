import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoaderContainer = styled('div')`
  width: 80px;
  height: 80px;
  animation: spin 1.75s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    overflow: visible;
    width: 40px;
    transform: rotate(104deg);

    path.rocket__wings {
      animation: wings 2s infinite;
    }
    path.rocket__flame-outer {
      animation: flameOuter 1s infinite linear;
    }
    path.rocket__flame-middle {
      animation: flameInner 1.85s infinite;
    }
    path.rocket__flame-inner {
      animation: flameInner 0.6s infinite;
    }

    @keyframes wings {
      0% {
        transform: skew(0deg, 0deg);
      }
      50% {
        transform: skew(5deg, 5deg);
      }
      100% {
        transform: skew(0deg, 0deg);
      }
    }
    @keyframes flameOuter {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.15);
        opacity: 0.75;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes flameMiddle {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes flameInner {
      0% {
        transform: scale(1.2);
        opacity: 1;
      }
      50% {
        transform: scale(1);
        opacity: 0.5;
      }
      100% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  }
`;
