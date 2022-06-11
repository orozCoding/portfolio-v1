import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scroll: true
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    turnScrollOn: (state) => {
      state.scroll = true;
    },
    turnScrollOff: (state) => {
      state.scroll = false;
    },
  },
});

export const { turnScrollOn, turnScrollOff } = appSlice.actions;

export const selectScrollStatus = (state) => state.app.scroll;
export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;