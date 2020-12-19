import React from 'react';
import Svg, { Path } from 'react-native-svg';

import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <Svg
        width="27"
        height="23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M25.333 0h-24A1.333 1.333 0 000 1.333V20a2.667 2.667 0 002.667 2.667H24A2.667 2.667 0 0026.667 20V1.333A1.333 1.333 0 0025.333 0zm-12 12c-4.412 0-8-3.588-8-8H8a5.339 5.339 0 005.333 5.333A5.339 5.339 0 0018.667 4h2.666c0 4.412-3.588 8-8 8z"
          fill="#000"
        />
      </Svg>
    </S.Container>
  );
};

export default Logo;
