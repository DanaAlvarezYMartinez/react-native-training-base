import { completeState, createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  bookList: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {}
};

export default createReducer(initialState, completeReducer(reducerDescription));
