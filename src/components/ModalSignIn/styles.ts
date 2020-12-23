import styled from 'styled-components/native';

export const Wrapper = styled.View.attrs({
  borderTopRightRadius: 32,
  borderTopLeftRadius: 32,
})`
  background-color: #fff;
  flex: 0.6;
  margin-top: auto;

  padding: 20px;
`;

export const Container = styled.Modal``;
export const CloseButton = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const WrapperContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Robot-Medium';
  margin-bottom: 66px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 280px;
  color: #000;
  background-color: #ebebeb;
  border-radius: 4px;
  padding: 0 20px;
  margin-bottom: 27px;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #000;
`;

export const Error = styled.Text`
  color: red;
  font-size: 10px;
`;
