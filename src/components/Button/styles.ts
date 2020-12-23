import styled, { css } from 'styled-components/native';
// import { ButtonProps } from '.';

export type ButtonProps = {
  primary?: boolean;
  width?: string;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: 60px;
  ${({ primary, width }) => css`
    background-color: ${primary ? '#fff' : '#000'};
    width: ${width || '100%'};
  `}

  border-radius: 50px;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 20px;
  font-family: 'Roboto-Medium';

  ${({ primary }) => css`
    color: ${primary ? '#000' : '#fff'};
  `}
`;
