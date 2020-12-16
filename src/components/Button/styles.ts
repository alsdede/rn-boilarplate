import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-radius: 50px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000000;
  font-size: 20px;
  font-family: 'Roboto-Medium';
`;
