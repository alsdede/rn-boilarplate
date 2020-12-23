import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// service
import { FlatList, Text, View } from 'react-native';
import getRealmApp from '../../service/realm';

import { useAuth } from '../../hooks/auth';
// components
import Logo from '../../components/Logo';
import Star from '../../components/_icons/StarIcon';
import LogoutIcon from '../../components/_icons/LogoutIcon';

import Button from '../../components/Button';
import ModalSignIn from '../../components/ModalSignIn';

// styles
import * as S from './styles';

const Sign: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisibleSignIn, setModalVisibleSignIn] = useState(false);
  const [modalVisibleSignUp, setModalVisibleSignUp] = useState(false);

  const { signIn, getAllUsers, allUsers } = useAuth();

  async function handleCreateUser() {
    const realm = await getRealmApp();

    const data = {
      id: uuidv4(),
      name: 'MALU',
      password: '123456',
    };
    realm.write(() => {
      realm.create('User', data);
    });

    return data;
  }
  async function loadRepositories() {
    const realm = await getRealmApp();

    const data = realm.objects('User').sorted('name');
    console.log('DATA===========P', data);
    setUsers(data);
  }

  useEffect(() => {
    loadRepositories();
    // signIn({ name: 'MALU', password: '123456' });
  }, []);

  const handleOpenModalSignIn = () => {
    console.log('AQUI');
    setModalVisibleSignIn(!modalVisibleSignIn);
  };
  const handleOpenModalSignUp = () => {
    console.log('AQUI');
    setModalVisibleSignUp(!modalVisibleSignUp);
  };

  const handleButtonPressSignIn = () => {
    console.log('button press');
  };
  const handleLinkPressSignIn = () => {
    console.log('link press');
  };

  return (
    <S.Container>
      <View>
        <Logo />
        <S.Title>welcome to the jungle</S.Title>
      </View>
      <View>
        <Button primary onPress={handleOpenModalSignIn}>
          Sign in
        </Button>
        <Button primary onPress={handleCreateUser}>
          Sign up
        </Button>
      </View>
      <ModalSignIn
        modalVisible={modalVisibleSignIn}
        handleOpenModal={handleOpenModalSignIn}
      />
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ color: 'red' }}>{item.name}</Text>
        )}
      />
    </S.Container>
  );
};

export default Sign;
