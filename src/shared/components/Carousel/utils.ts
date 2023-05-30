import { IndicatorVariants } from './Carousel';
import {
  CAROUSEL_INDICATORS_CONTAINER,
  CAROUSEL_INDICATORS_CONTAINER_CUSTOM,
  CAROUSEL_INDICATOR_BUTTON,
  CAROUSEL_INDICATOR_BUTTON_ACTIVE,
  CAROUSEL_INDICATOR_BUTTON_CUSTOM,
  CAROUSEL_INDICATOR_BUTTON_CUSTOM_ACTIVE,
} from './const';

type ClassesKeys = {
  container: string;
  button: string;
  buttonActive: string;
};

export const getClassnameByIndicatorVariant = (variant: IndicatorVariants) => {
  const classnames: Record<IndicatorVariants, ClassesKeys> = {
    default: {
      container: CAROUSEL_INDICATORS_CONTAINER,
      button: CAROUSEL_INDICATOR_BUTTON,
      buttonActive: CAROUSEL_INDICATOR_BUTTON_ACTIVE,
    },
    custom: {
      container: CAROUSEL_INDICATORS_CONTAINER_CUSTOM,
      button: CAROUSEL_INDICATOR_BUTTON_CUSTOM,
      buttonActive: CAROUSEL_INDICATOR_BUTTON_CUSTOM_ACTIVE,
    },
  };

  return classnames[variant];
};
