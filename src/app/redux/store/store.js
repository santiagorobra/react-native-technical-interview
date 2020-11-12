import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { detailBookReducer } from '../reducers/detailBookReducer';
import { loadingReducer } from '../reducers/loadingReducer';

const reducers = combineReducers({
  auth: authReducer,
  loadingStore: loadingReducer,
  book: detailBookReducer
});

export const store = createStore(reducers);