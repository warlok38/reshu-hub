import { PROD_HOSTNAME } from 'shared/constants/path';

export function isProduction() {
  return window.location.hostname === PROD_HOSTNAME;
}
