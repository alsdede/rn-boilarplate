import React from 'react';
import Svg, { Path } from 'react-native-svg';
import * as S from './styles';

export type IconProps = {
  color?: string;
  size?: string;
};

const StarIcon = ({ color = 'white', size = '24' }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <Svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.865 14.351c-.078.444.36.791.746.593L8 12.688l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.464.293a.513.513 0 00-.927 0L5.353 4.621l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73v-.002zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505l-2.906-2.77L5.76 5.67a.525.525 0 00.393-.288L8 1.724l1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.504.504 0 00-.461 0z"
          fill={color}
        />
      </Svg>
    </S.Wrapper>
  );
};

export default StarIcon;
