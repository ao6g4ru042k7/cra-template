import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../index';

// Define a type for the slice state
interface ErrorState {
  message: string;
}

// Define the initial state using that type
const initialState: ErrorState = {
  message: '',
};

export const errorSlice = createSlice({
  name: 'error',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    init: (state) => {
      state.message = '';
    },
  },
});

export const { setMessage, init } = errorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectErrorData = (state: RootState) => state.error;

export default errorSlice.reducer;
