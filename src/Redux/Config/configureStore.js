import { configureStore } from '@reduxjs/toolkit';
import postModalReducer from '../Slices/PostModalSlice';
import postAddReducer from '../Slices/PostsSlice';

const store = configureStore({
  reducer: {
    modal: postModalReducer,
    posts: postAddReducer
  }
});

export default store;
