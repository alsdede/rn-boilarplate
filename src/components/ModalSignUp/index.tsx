import React, { useState, useEffect } from 'react';

// service
import getRealmApp from '../../service/realm';

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

const ModalSignUp: React.FC<ModalProps> = ({
  modalVisible,
  handleOpenModal,
}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { createUser, error, setError } = useAuth();
  console.log('username', userName);
  console.log('userpass', userPassword);

  async function handleCreateUser() {
    createUser({ name: userName, password: userPassword });
  }
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={modalVisible}
    >
      <S.Wrapper>
        <S.CloseButton
          onPress={() => {
            handleOpenModal();
            setUserName('');
            setUserPassword('');
            setError('');
          }}
        >
          <CloseIcon color="#000" />
        </S.CloseButton>
        <S.WrapperContainer>
          <S.Title>Create new user</S.Title>
          <S.InputWrapper>
            {!!error && <S.Error>{error}</S.Error>}
            <S.Input
              placeholderTextColor="#AFAFAF"
              placeholder="User"
              value={userName}
              onChangeText={text => setUserName(text)}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input
              placeholderTextColor="#AFAFAF"
              placeholder="Password"
              value={userPassword}
              onChangeText={text => setUserPassword(text)}
            />
          </S.InputWrapper>

          <Button
            onPress={handleCreateUser}
            width="280px"
            style={{ marginBottom: 20 }}
          >
            Sign up
          </Button>
          <S.Link
            onPress={() => {
              console.log('link');
            }}
          >
            <S.LinkText>login</S.LinkText>
          </S.Link>
        </S.WrapperContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ModalSignUp;
