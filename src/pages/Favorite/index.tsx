import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

// service
import { Results, Object } from 'realm';
import getRealmApp from '../../service/realm';

// components
import CustomHeader from '../../components/CustomHeader';
import StarFullIcon from '../../components/_icons/StarFullIcon';

// styles
import * as S from './styles';

const ChannelItem = ({ favoriteList }) => {
  const handleRemove = async () => {
    const realm = await getRealmApp();
    const check = realm
      .objects('Favorite')
      .filtered('id ==$0', favoriteList.id);
    if (check.length > 0) {
      realm.write(() => {
        realm.delete(
          realm.objects('Favorite').filtered('id ==$0', favoriteList.id),
        );
      });
    } else {
      console.log('ERRO AO REMOVER FAVORITO');
    }
  };

  return (
    <S.ChannelContainer>
      <S.ChannelLeft>
        <S.WrapperThumb>
          <S.Thumb
            resizeMode="cover"
            source={{
              uri: favoriteList.thumb,
            }}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </S.WrapperThumb>
        <S.ChannelTitle>{favoriteList.title}</S.ChannelTitle>
      </S.ChannelLeft>

      <S.FavoriteButton onPress={handleRemove}>
        <StarFullIcon color="#000" />
      </S.FavoriteButton>
    </S.ChannelContainer>
  );
};

type FavoriteProp = {
  id: string;
  title: string;
  thumb: string;
};
const Favorite: React.FC = () => {
  const [favoriteList, setFavoriteList] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  async function loadFavorites() {
    setLoading(true);
    const realm = await getRealmApp();
    const checkFavorite = realm.objects('Favorite');

    if (checkFavorite.length > 0) {
      setFavoriteList(checkFavorite);
    } else {
      console.log('ERRO AO CARREGAR LISTA DE FAVORITOS');
    }
    setLoading(false);
  }
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <>
      <CustomHeader />
      <S.Container>
        <FlatList
          refreshing={loading}
          onRefresh={() => loadFavorites()}
          showsVerticalScrollIndicator={false}
          data={favoriteList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ChannelItem favoriteList={item} />}
        />
      </S.Container>
      <S.BackButton onPress={() => navigation.goBack()}>
        <S.BackText>back</S.BackText>
      </S.BackButton>
    </>
  );
};

export default Favorite;
