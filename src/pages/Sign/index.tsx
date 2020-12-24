import React, { useEffect, useState } from 'react';

// service
import {
  FlatList,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import getRealmApp from '../../service/realm';

// components
import Logo from '../../components/Logo';

import Button from '../../components/Button';
import ModalSignIn from '../../components/ModalSignIn';

// styles
import * as S from './styles';
import ModalSignUp from '../../components/ModalSignUp';

const Sign: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [modalVisibleSignIn, setModalVisibleSignIn] = useState(false);
  const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);

  async function loadRepositories() {
    const realm = await getRealmApp();

    const data = realm.objects('User').sorted('name');
    setUsers(data);
  }

  useEffect(() => {
    loadRepositories();
    // signIn({ name: 'MALU', password: '123456' });
  }, []);

  const handleOpenModalSignIn = () => {
    setModalVisibleSignIn(!modalVisibleSignIn);
  };
  const handleOpenModalSignUp = () => {
    setModalVisibleSignUp(!modalVisibleSignUp);
  };

  const handleButtonPressSignIn = () => {
    console.log('button press');
  };
  const handleLinkPressSignIn = () => {
    console.log('link press');
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <S.Container>
            <View>
              <Logo />
              <S.Title>welcome to the jungle</S.Title>
            </View>
            <View>
              <Button primary onPress={handleOpenModalSignIn}>
                Sign in
              </Button>
              <Button primary onPress={handleOpenModalSignUp}>
                Sign up
              </Button>
            </View>
            <ModalSignIn
              modalVisible={modalVisibleSignIn}
              handleOpenModal={handleOpenModalSignIn}
            />
            <ModalSignUp
              modalVisible={modalVisibleSignUp}
              handleOpenModal={handleOpenModalSignUp}
            />
            <FlatList
              data={users}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Text style={{ color: 'red' }}>{item.name}</Text>
              )}
            />
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Sign;
