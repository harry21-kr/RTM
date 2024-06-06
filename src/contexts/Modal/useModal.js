import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../Redux/Slices/PostModalSlice';

export const useModal = (modalElement) => {
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal(modalElement));
  }, [dispatch, modalElement]);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return [handleOpenModal, handleCloseModal];
};
