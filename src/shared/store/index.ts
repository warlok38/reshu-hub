import { configureStore } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch as _ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers';
import { mainApi } from 'shared/api/http/mainApi';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkDispatch = _ThunkDispatch<RootState, any, UnknownAction>;
export type DispatchAbortPromise = { abort(reason?: string): void };
export type ThunkActionResult<T> = DispatchAbortPromise & {
  unwrap(): Promise<T>;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      mainApi.middleware
    ),
});

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
