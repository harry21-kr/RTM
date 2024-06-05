import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalElement: null
};

const PostModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalElement = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalElement = null;
    }
  }
});

export const { openModal, closeModal } = PostModalSlice.actions;
export default PostModalSlice.reducer;
