import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// service
import axios from 'axios';
import { FlatList, Text, View } from 'react-native';
import getRealmApp from '../../service/realm';

import { useAuth } from '../../hooks/auth';
// components
import Logo from '../../components/Logo';
import Star from '../../components/_icons/StarIcon';
import LogoutIcon from '../../components/_icons/LogoutIcon';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

// styles

import * as S from './styles';

const Sign: React.FC = () => {
  const [searchParam, setSearchParam] = useState('a');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { signIn, teste } = useAuth();
  console.log('TESTE MMMMM', teste);
  async function handleCreateUser() {
    const realm = await getRealmApp();
    // await signIn({ name: 'MALU', password: '123456' });
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
    signIn({ name: 'MALU', password: '123456' });
  }, [signIn]);
  // const fetchData = () => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchParam}&type=video&key=AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8`,
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data.items);
  //     });
  // };

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  console.log('USERS', users);
  return (
    <S.Container>
      <View>
        <Logo />
        <Star />
        <LogoutIcon />
      </View>
      <Button onPress={handleCreateUser}>ADD USER</Button>
      <Button
        onPress={() => {
          signIn({ name: 'MALU', password: '123456' });
        }}
      >
        ADD USER
      </Button>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={teste}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Text style={{ color: 'yellow' }}>{item.name}</Text>
            <Text style={{ color: 'yellow' }}>{item.password}</Text>
          </>
        )}
      />
      <FlatList
        keyboardShouldPersistTaps="handled"
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
