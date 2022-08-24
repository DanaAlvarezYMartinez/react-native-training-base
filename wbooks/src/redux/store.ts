import { configureStore } from '@reduxjs/toolkit';

import reducerBook from './Book/reducer';

export const store = configureStore({ reducer: reducerBook });

export type RootState = ReturnType<typeof store.getState>;
