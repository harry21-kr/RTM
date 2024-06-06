import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(({ id }) => id !== action.payload.id);
    },
    editPost: (state, action) => {
      const newPosts = state.posts.map((post) => (post.id === action.payload.id ? action.payload : post));
      state.posts = newPosts;
    }
  }
});

export const { initPosts, addPost, deletePost, editPost } = PostsSlice.actions;
export default PostsSlice.reducer;
