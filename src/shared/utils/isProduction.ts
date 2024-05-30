export function isProduction() {
  const PROD_HOSTNAME = 'http://reshu-hub.mooo.com';

  return window.location.hostname === PROD_HOSTNAME;
}
