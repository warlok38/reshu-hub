import { JWT_ACCESS } from 'shared/constants/connect';

class AccessToken {
  readonly TOKEN_STORAGE_KEY = JWT_ACCESS;

  setToken(value: string) {
    localStorage.setItem(this.TOKEN_STORAGE_KEY, value);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_STORAGE_KEY);
  }

  removeToken() {
    return localStorage.removeItem(this.TOKEN_STORAGE_KEY);
  }
}

export const accessToken = new AccessToken();
