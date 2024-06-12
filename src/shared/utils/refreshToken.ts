import { JWT_REFRESH } from 'shared/constants/connect';

class RefreshToken {
  readonly TOKEN_STORAGE_KEY = JWT_REFRESH;

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

export const refreshToken = new RefreshToken();
