import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// hooks
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
// icons
import UserIcon from '../_icons/UserIcon';
import StarIcon from '../_icons/StarIcon';
import LogoutIcon from '../_icons/LogoutIcon';

import * as S from './styles';

type HeaderProps = {
  showFavorite?: boolean;
};

const CustomHeader = ({ showFavorite = false }: HeaderProps) => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Left>
        <S.WrapperIcon>
          <UserIcon color="#000" />
        </S.WrapperIcon>
        <S.Username>{user.name}</S.Username>
      </S.Left>
      <S.Right>
        {showFavorite && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Favorite')}
            style={{ marginRight: 21 }}
          >
            <StarIcon />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={signOut}>
          <LogoutIcon />
        </TouchableOpacity>
      </S.Right>
    </S.Container>
  );
};

export default CustomHeader;
