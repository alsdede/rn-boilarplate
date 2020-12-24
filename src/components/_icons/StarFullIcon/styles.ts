import styled, { css } from 'styled-components/native';
import { IconProps } from '.';

export const Wrapper = styled.View<IconProps>`
  ${({ color, size }) => css`
    color: ${color};
    height: ${size};
    width: ${size};
  `}
`;
