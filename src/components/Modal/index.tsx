import React, { useState, useEffect } from 'react';

// hooks
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';

// components
import Button from '../Button';

// icons
import CloseIcon from '../_icons/CloseIcon';
import * as S from './styles';

interface ModalProps {
  modalVisible: boolean;
  handleOpenModal(): void;
  showSignIn: boolean;
}
const SignUp: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { createUser, error, setError } = useAuth();
  const { handleOpenModal, modalVisible, handleShowSignIn } = useModal();
  console.log('username', userName);
  console.log('userpass', userPassword);

  async function handleCreateUser() {
    createUser({ name: userName, password: userPassword });
  }
  return (
    <>
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
        <S.Link onPress={handleShowSignIn}>
          <S.LinkText>login</S.LinkText>
        </S.Link>
      </S.WrapperContainer>
    </>
  );
};

const SignIn: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const {
    handleShowSignUp,
    modalVisible,
    showSignIn,
    handleOpenModal,
  } = useModal();
  const { signIn, error, setError } = useAuth();
  console.log('username', userName);
  console.log('password', userPassword);

  useEffect(() => {
    setUserName('');
    setUserPassword('');
  }, []);

  const handleButtonPress = () => {
    signIn({ name: userName, password: userPassword });
    handleOpenModal();
  };

  return (
    <>
      <S.WrapperContainer>
        <S.Title>Welcome</S.Title>
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
          onPress={handleButtonPress}
          width="280px"
          style={{ marginBottom: 20 }}
        >
          Sign in
        </Button>
        <S.Link onPress={handleShowSignUp}>
          <S.LinkText>new user</S.LinkText>
        </S.Link>
      </S.WrapperContainer>
    </>
  );
};

const Modal: React.FC = () => {
  const { handleOpenModal, modalVisible, showSignIn } = useModal();
  const handleCloseAndClearAll = () => {
    handleOpenModal();
    // setUserName('');
    // setUserPassword('');
    // setCreateUserName('');
    // setCreateUserPassword('');
    // setError('');
  };
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={modalVisible}
    >
      <S.Wrapper>
        <S.CloseButton onPress={handleCloseAndClearAll}>
          <CloseIcon color="#000" />
        </S.CloseButton>
        {showSignIn ? <SignIn /> : <SignUp />}
      </S.Wrapper>
    </S.Container>
  );
};
export default Modal;
