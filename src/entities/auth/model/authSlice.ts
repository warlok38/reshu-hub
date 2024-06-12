import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserEntity } from 'shared/models/api/user/user';

type LoginSuccessProps = {
  user: UserEntity | null;
  isAuthenticated: boolean;
};
type InitialStateProps = {
  user: UserEntity | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};
const initialState: InitialStateProps = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, { payload }: PayloadAction<LoginSuccessProps>) => {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
      state.isLoading = false;
    },
    loginFailed: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { name, actions: authActions, reducer: authReducer } = authSlice;
