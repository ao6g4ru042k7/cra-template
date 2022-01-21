import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slice/exampleSlice';
import postsReducer from './slice/postsSlice';
import persistedReducer from './slice/persistedSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    posts: postsReducer,
    persisted: persistedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type:
// { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch;
