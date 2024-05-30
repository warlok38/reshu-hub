import { authReducer } from 'entities/auth';
import { combineReducers } from 'redux';
import { mainApi } from 'shared/api/http/mainApi';

const rootReducer = combineReducers({
  auth: authReducer,
  [mainApi.reducerPath]: mainApi.reducer,
});

export default rootReducer;
