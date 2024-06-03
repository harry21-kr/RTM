import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/post/post.slice';

const store = configureStore({
  reducer: { post: postSlice }
});

export default store;
