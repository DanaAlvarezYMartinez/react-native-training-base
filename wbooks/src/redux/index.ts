import { combineReducers } from 'redux';

import reducerBook from './Book/reducer';

const rootReducer = () => combineReducers({ reducerBook });

export default rootReducer;
