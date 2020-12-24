import React from 'react';
import Svg, { Path } from 'react-native-svg';
import * as S from './styles';

export type IconProps = {
  color?: string;
  size?: string;
};

const StarFullIcon = ({ color = 'black', size = '24' }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <Svg fill="none">
        <Path
          d="M15.483 5.634l-4.797-.73L8.542.352a.595.595 0 00-1.084 0L5.314 4.904l-4.797.73a.594.594 0 00-.345.184.65.65 0 00-.172.45.649.649 0 00.183.446l3.47 3.543-.82 5.003a.66.66 0 00.036.346c.042.11.113.204.204.273a.586.586 0 00.637.048L8 13.565l4.29 2.362a.577.577 0 00.384.063.63.63 0 00.493-.73l-.82-5.003 3.47-3.543a.643.643 0 00.176-.362.627.627 0 00-.51-.718z"
          fill={color}
        />
      </Svg>
    </S.Wrapper>
  );
};

export default StarFullIcon;
