import React, { useState, useEffect } from 'react';

// hooks
import { useAuth } from '../../hooks/auth';

// components
import Button from '../Button';
import ModalSignUp from '../ModalSignUp';

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
  const [createUserName, setCreateUserName] = useState('');
  const [createUserPassword, setCreateUserPassword] = useState('');
  const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);
  const { signIn, error, setError } = useAuth();
  console.log('username', userName);
  console.log('password', userPassword);

  useEffect(() => {
    setUserName('');
    setUserPassword('');
  }, []);
  const handleOpenModalSignUp = () => {
    setModalVisibleSignUp(!modalVisibleSignUp);
    handleOpenModal();
  };
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
          <S.Link onPress={handleOpenModalSignUp}>
            <S.LinkText>new user</S.LinkText>
          </S.Link>
        </S.WrapperContainer>
      </S.Wrapper>
      <ModalSignUp
        modalVisible={modalVisibleSignUp}
        handleOpenModal={handleOpenModalSignUp}
      />
    </S.Container>
  );
};

export default ModalSignIn;
