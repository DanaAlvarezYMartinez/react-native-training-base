import { combineReducers } from 'redux';

import { books } from './Book/reducer';

const rootReducer = () => combineReducers({ books });

export default rootReducer;
