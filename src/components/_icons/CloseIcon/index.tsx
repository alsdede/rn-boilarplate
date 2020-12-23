import React from 'react';
import Svg, { Path } from 'react-native-svg';
import * as S from './styles';

export type IconProps = {
  color?: string;
  size?: string;
};

const CloseIcon = ({ color = 'white', size = '24px' }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <Svg fill="none">
        <Path
          d="M8.644 7.64L14.796.308A.186.186 0 0014.653 0h-1.87c-.11 0-.216.05-.288.134L7.42 6.183 2.346.133A.375.375 0 002.058 0H.188a.186.186 0 00-.143.307l6.152 7.334-6.152 7.333a.187.187 0 00.143.307h1.87c.11 0 .216-.049.288-.133l5.074-6.05 5.075 6.05c.07.084.176.133.288.133h1.87c.16 0 .246-.185.143-.307L8.644 7.641z"
          fill={color}
        />
      </Svg>
    </S.Wrapper>
  );
};

export default CloseIcon;
