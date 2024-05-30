import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  isAuthenticated: boolean;
};
const initialState: initialStateProps = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { name, actions: authActions, reducer: authReducer } = authSlice;
