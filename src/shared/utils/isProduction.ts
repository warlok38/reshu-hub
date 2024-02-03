export function isProduction() {
  const PROD_HOSTNAME = 'reshu-hub.ru';

  return window.location.hostname === PROD_HOSTNAME;
}
