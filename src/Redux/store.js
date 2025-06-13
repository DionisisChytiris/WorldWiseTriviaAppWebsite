import { configureStore } from '@reduxjs/toolkit';
import booleanReducer from './NavBooleanSlice';

export const store = configureStore({
  reducer: {
    boolean: booleanReducer,
  },
});
