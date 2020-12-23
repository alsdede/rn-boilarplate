import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  primary?: boolean;
  width?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  width = '100%',
  ...rest
}) => {
  return (
    <S.Container {...rest} primary={primary} width={width}>
      <S.ButtonText primary={primary}>{children}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
