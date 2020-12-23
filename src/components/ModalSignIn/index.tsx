import React, { useState } from 'react';

// hooks
import { useAuth } from '../../hooks/auth';

// components
import Button from '../Button';

// icons
import CloseIcon from '../_icons/CloseIcon';
import * as S from './styles';

interface ModalProps {
  modalVisible: boolean;
  handleOpenModal(): void;
}

const ModalSignIn: React.FC<ModalProps> = ({
  modalVisible,
  handleOpenModal,
}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { signIn, error } = useAuth();
  console.log('username', userName);
  console.log('password', userPassword);

  const handleButtonPress = () => {
    signIn({ name: userName, password: userPassword });
  };

  const handleLinkPress = () => {
    console.log('link press');
  };
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
          <S.Title>Welcome</S.Title>
          <S.Input
            placeholderTextColor="#AFAFAF"
            placeholder="User"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          {!!error && <S.Error>{error}</S.Error>}
          <S.Input
            placeholderTextColor="#AFAFAF"
            placeholder="Password"
            value={userPassword}
            onChangeText={text => setUserPassword(text)}
          />
          <Button
            onPress={handleButtonPress}
            width="280px"
            style={{ marginBottom: 20 }}
          >
            Sign in
          </Button>
          <S.Link onPress={handleLinkPress}>
            <S.LinkText>new user</S.LinkText>
          </S.Link>
        </S.WrapperContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ModalSignIn;
