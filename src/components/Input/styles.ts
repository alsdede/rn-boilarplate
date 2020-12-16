import styled, { css } from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background: #ebebeb;
  border-radius: 4px;
  margin-bottom: 27px;
  border-width: 2px;
  border-color: #ebebeb;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const Icon = styled(VectorIcon)`
  margin-right: 16px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #afafaf;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;
