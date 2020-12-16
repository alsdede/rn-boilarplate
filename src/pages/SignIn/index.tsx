import React from 'react';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';

// styles
import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Title>TESTE</S.Title>
      <Input
        secureTextEntry
        name="password"
        placeholder="Password"
        returnKeyType="send"
      />
      <Button
        onPress={() => {
          console.log('sign in');
        }}
      >
        Sign In
      </Button>
    </S.Container>
  );
};

export default SignIn;
