import { configureStore } from '@reduxjs/toolkit';
import postModalReducer from '../Slices/PostModalSlice';

const store = configureStore({
  reducer: {
    modal: postModalReducer
  }
});

export default store;
