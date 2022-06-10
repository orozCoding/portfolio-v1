import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../old/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
