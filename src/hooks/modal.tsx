import React, { createContext, useContext, useCallback, useState } from 'react';

export interface ModalMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ModalContextData {
  showSignIn: boolean;
  // addModal(messages: Omit<ModalMessage, 'id'>): void;
  handleOpenModal(): void;
  handleShowSignIn(): void;
  handleShowSignUp(): void;
  modalVisible: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const handleShowSignIn = useCallback(() => {
    setShowSignIn(true);
  }, []);
  const handleShowSignUp = useCallback(() => {
    setShowSignIn(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        handleShowSignIn,
        handleShowSignUp,
        showSignIn,
        modalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
