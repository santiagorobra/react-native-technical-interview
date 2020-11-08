import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { loadingReducer } from '../reducers/loadingReducer';

const reducers = combineReducers({
  auth: authReducer,
  loadingStore: loadingReducer,
});

export const store = createStore(reducers);