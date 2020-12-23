import React, { useState } from 'react';

// components
import Button from '../Button';

// icons
import CloseIcon from '../_icons/CloseIcon';
import * as S from './styles';

interface ModalProps {
  modalVisible: boolean;
  handleOpenModal(): void;
  handleButtonPress(): void;
  handleLinkPress(): void;
  titleText?: string;
  buttonText: string;
  linkText?: string;
}

const ModalSignUp: React.FC<ModalProps> = ({
  modalVisible,
  handleOpenModal,
  handleButtonPress,
  handleLinkPress,
  titleText,
  buttonText,
  linkText,
}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  console.log('username', userName);
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={modalVisible}
    >
      <S.Wrapper>
        <S.CloseButton onPress={handleOpenModal}>
          <CloseIcon color="#000" />
        </S.CloseButton>
        <S.WrapperContainer>
          {titleText && <S.Title>{titleText}</S.Title>}
          <S.Input
            placeholderTextColor="#AFAFAF"
            placeholder="User"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <S.Input placeholderTextColor="#AFAFAF" placeholder="Password" />
          <Button
            onPress={handleButtonPress}
            width="280px"
            style={{ marginBottom: 20 }}
          >
            {buttonText}
          </Button>
          <S.Link onPress={handleLinkPress}>
            <S.LinkText>{linkText}</S.LinkText>
          </S.Link>
        </S.WrapperContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ModalSignUp;
