import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// service
import axios from 'axios';
import { FlatList, Text } from 'react-native';
import getRealmApp from '../../service/realm';

import { useAuth } from '../../hooks/auth';
// components
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

// styles
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Text>HOME</Text>
    </S.Container>
  );
};

export default Home;
