import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import reducerBook from './Book/reducer';

const reducer = combineReducers({ reducerBook });

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fetchMiddleware).concat(thunk)
});
