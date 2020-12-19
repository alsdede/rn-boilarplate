import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 104px;
  border-radius: 32px;
  background-color: #000;
  justify-content: space-between;

  padding: 17px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Username = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  margin-left: 22px;
`;

export const WrapperIcon = styled.View`
  padding: 10px;
  background-color: #fff;
  border-radius: 30px;
`;
