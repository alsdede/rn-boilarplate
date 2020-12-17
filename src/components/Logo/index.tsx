import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <Text style={{ fontSize: 24, color: '#000' }}>L</Text>
    </S.Container>
  );
};

export default Logo;
