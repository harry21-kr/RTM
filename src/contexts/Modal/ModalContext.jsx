import { createContext, useState } from 'react';
import styled from 'styled-components';

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalElement, setModalElement] = useState(null);

  const handleOpenModal = (element) => {
    setIsOpen(true);
    setModalElement(element);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalElement(null);
  };

  return (
    <ModalContext.Provider value={{ handleOpenModal, handleCloseModal }}>
      {children}
      {isOpen && <StModalBackdrop>{modalElement}</StModalBackdrop>}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

const StModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
`;
