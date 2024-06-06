import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    initPosts: (state, action) => {
      state.posts = action.payload;
    }
  }
});

export const { addPosts, initPosts } = PostsSlice.actions;
export default PostsSlice.reducer;
