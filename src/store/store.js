import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import scoreReducer from '../score/scoreSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    score: scoreReducer,
  },
});
