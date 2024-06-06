import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth.slice';
import postSlice from './slices/post/post.slice';

const store = configureStore({
  reducer: { auth: authSlice, post: postSlice }
});

export default store;
