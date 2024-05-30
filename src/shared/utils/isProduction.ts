import { ROOT_URL } from 'shared/api/http/consts';

export function isProduction() {
  const PROD_HOSTNAME = ROOT_URL;

  return window.location.hostname === PROD_HOSTNAME;
}
