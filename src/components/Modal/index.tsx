import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

// components
import Button from '../Button';
import Input from '../Input';

import * as S from './styles';

interface ModalProps {
  modalVisible: boolean;
  handleOpenModal(): void;
}

const CustomModal: React.FC<ModalProps> = ({
  modalVisible,
  handleOpenModal,
}) => {
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}
    >
      <S.Wrapper>
        <S.CloseButton onPress={handleOpenModal}>
          <Text>X</Text>
        </S.CloseButton>
        <Button>close</Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default CustomModal;
