import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../old/counter/counterSlice';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
  },
});
