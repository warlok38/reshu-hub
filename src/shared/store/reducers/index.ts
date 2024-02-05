import { combineReducers } from 'redux';
import { mainApi } from 'shared/api/http/mainApi';

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
});

export default rootReducer;
