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

// hooks
import { useModal } from '../../hooks/modal';
// components
import Logo from '../../components/Logo';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

// styles
import * as S from './styles';

const Sign: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [modalVisibleSignIn, setModalVisibleSignIn] = useState(false);
  const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);
  const { handleOpenModal, handleShowSignIn, handleShowSignUp } = useModal();
  async function loadRepositories() {
    const realm = await getRealmApp();

    const data = realm.objects('User').sorted('name');
    setUsers(data);
  }

  useEffect(() => {
    loadRepositories();
    // signIn({ name: 'MALU', password: '123456' });
  }, []);

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
              <Button
                primary
                onPress={() => {
                  handleOpenModal();
                  handleShowSignIn();
                }}
              >
                Sign in
              </Button>
              <Button
                primary
                onPress={() => {
                  handleShowSignUp();
                  handleOpenModal();
                }}
              >
                Sign up
              </Button>
            </View>
            <Modal />

            {/* <FlatList
              data={users}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Text style={{ color: 'red' }}>{item.name}</Text>
              )}
            /> */}
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Sign;
