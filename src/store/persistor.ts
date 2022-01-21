import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './slice/persistedSlice';

export const persistor = configureStore({
  reducer: {
    persisted: persistedReducer,
  },
});
