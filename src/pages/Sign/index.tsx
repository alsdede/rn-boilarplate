import React, { useEffect, useState } from 'react';

// service
import axios from 'axios';
// components
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

// styles
import * as S from './styles';

const Sign: React.FC = () => {
  const [searchParam, setSearchParam] = useState('a');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {}, []);
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchParam}&type=video&key=AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8`,
    )
      .then(res => res.json())
      .then(data => {
        setData(data.items);
      });
  };

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <S.Container>
      <S.WrapperLogo>
        <Logo />
        <S.Title>welcome to the jungle</S.Title>
      </S.WrapperLogo>

      <S.WrapperFooter>
        <Button onPress={handleOpenModal}>Sign Up</Button>
        <Button onPress={handleOpenModal}>Sign In</Button>
      </S.WrapperFooter>

      <Modal modalVisible={modalVisible} handleOpenModal={handleOpenModal} />
      <Modal modalVisible={modalVisible} handleOpenModal={handleOpenModal} />
    </S.Container>
  );
};

export default Sign;
