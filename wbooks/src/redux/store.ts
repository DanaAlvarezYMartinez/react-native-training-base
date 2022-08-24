import { createStore } from 'redux';

import Reactotron from '../../ReactotronConfig';

import rootReducer from './index';

export const store = createStore(rootReducer, Reactotron.createEnhancer());
