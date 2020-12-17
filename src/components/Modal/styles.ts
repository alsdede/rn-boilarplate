import styled from 'styled-components/native';

export const Wrapper = styled.View.attrs({
  borderTopRightRadius: 32,
  borderTopLeftRadius: 32,
})`
  background-color: red;
  flex: 0.6;
  margin-top: auto;

  padding: 20px;
`;

export const Container = styled.Modal``;
export const CloseButton = styled.TouchableOpacity``;
