import React from 'react';
import Svg, { Path } from 'react-native-svg';
import * as S from './styles';

export type IconProps = {
  color?: string;
  size?: string;
};

const LogoutIcon = ({ color = 'white', size = '24' }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <Svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M13.706 11.706l2.293-2.293 2.294 2.294 1.414-1.414L17.414 8l2.293-2.293-1.414-1.414L16 6.586l-2.293-2.293-1.414 1.414 2.292 2.292-2.293 2.293 1.414 1.414zM10 4c0-2.28-1.72-4-4-4-2.28 0-4 1.72-4 4 0 2.28 1.72 4 4 4 2.28 0 4-1.72 4-4zM4 4c0-1.178.822-2 2-2s2 .822 2 2-.822 2-2 2-2-.822-2-2zM2 14c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5H5c-2.757 0-5 2.243-5 5v1h2v-1z"
          fill={color}
        />
      </Svg>
    </S.Wrapper>
  );
};

export default LogoutIcon;
