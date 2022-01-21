import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

// Define a type for the slice state
interface PostsState {
  posts: string[];
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
};

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  // The payload creator receives the partial `{title, content, user}` object
  async () => {
    // We send the initial data to the fake API server
    // const response = await client.post('/fakeApi/posts', initialPost);
    // The response includes the complete post object, including unique ID
    const response = { data: { post: 'cook' } };
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // omit posts loading reducers
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.posts.push(action.payload.post);
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
