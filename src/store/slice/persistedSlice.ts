import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import type { RootState } from '../index';

// Define a type for the slice state
interface PersistedState {
  name: string;
}

// Define the initial state using that type
const initialState: PersistedState = {
  name: 'test',
};

const persistedConfig = {
  key: 'persisted',
  storage,
};

export const persistedSlice = createSlice({
  name: 'persisted',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = persistedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectName = (state: RootState) => state.persisted.name;

export default persistReducer(persistedConfig, persistedSlice.reducer);
