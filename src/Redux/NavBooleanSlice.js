import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const booleanSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

// Export actions
export const { toggle, setTrue, setFalse } = booleanSlice.actions;

// Export reducer
export default booleanSlice.reducer;
