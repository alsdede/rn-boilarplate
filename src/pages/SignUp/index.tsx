import React, { useEffect, useState } from 'react';

// service
import axios from 'axios';
// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// styles
import * as S from './styles';

const SignIn: React.FC = () => {
  const [searchParam, setSearchParam] = useState('a');
  const [data, setData] = useState([]);

  useEffect(() => {}, []);
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchParam}&type=video&key=AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8`,
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        setData(data.items);
      });
  };
  return (
    <S.Container>
      <S.Title>TESTE</S.Title>
      <Input
        secureTextEntry
        name="password"
        placeholder="Password"
        returnKeyType="send"
      />
      <Button onPress={fetchData}>Sign In</Button>
    </S.Container>
  );
};

export default SignIn;
