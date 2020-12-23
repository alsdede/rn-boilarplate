import React from 'react';
import Svg, { Path } from 'react-native-svg';
import * as S from './styles';

export type IconProps = {
  color?: string;
  size?: string;
};

const SearchIcon = ({ color = 'white', size = '24' }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <Svg fill="none">
        <Path
          d="M8 16a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8zM8 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
          fill={color}
        />
      </Svg>
    </S.Wrapper>
  );
};

export default SearchIcon;
