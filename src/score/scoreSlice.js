import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = scoreSlice.actions;

export default scoreSlice.reducer;
