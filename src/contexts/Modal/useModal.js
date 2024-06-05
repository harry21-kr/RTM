import { useCallback, useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModal = (modalElement) => {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const handleOpenModalCallback = useCallback(() => {
    handleOpenModal(modalElement);
  }, [handleOpenModal, modalElement]);

  return [handleOpenModalCallback, handleCloseModal];
};
