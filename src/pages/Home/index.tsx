import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// service
import axios from 'axios';
import { FlatList, Text } from 'react-native';
import getRealmApp from '../../service/realm';

import { useAuth } from '../../hooks/auth';
// components
import CustomHeader from '../../components/CustomHeader';
import SearchIcon from '../../components/_icons/SearchIcon';
import StarIcon from '../../components/_icons/StarIcon';

// styles
import * as S from './styles';
import CloseIcon from '../../components/_icons/CloseIcon';

const ChannelItem = ({ item, favoriteList }) => {
  const checkHere = favoriteList.find(fav => fav.id === item.id.videoId);

  const handleAddOrRemove = async () => {
    const realm = await getRealmApp();
    const check = realm
      .objects('Favorite')
      .filtered('id ==$0', item.id.videoId);
    if (check.length > 0) {
      realm.write(() => {
        realm.delete(
          realm.objects('Favorite').filtered('id ==$0', item.id.videoId),
        );
      });
    } else {
      console.log('ADICIONAR AINDA NAO TINHA');
      realm.write(() => {
        const data = {
          id: item.id.videoId,
          title: item.snippet.channelTitle,
          thumb: item.snippet.thumbnails.default.url,
        };
        realm.create('Favorite', data);
      });
    }
  };

  return (
    <S.ChannelContainer>
      <S.ChannelLeft>
        <S.WrapperThumb>
          <S.Thumb
            resizeMode="cover"
            source={{
              uri: item.snippet.thumbnails.default.url,
            }}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </S.WrapperThumb>
        <S.ChannelTitle>{item.snippet.channelTitle}</S.ChannelTitle>
      </S.ChannelLeft>

      <S.FavoriteButton onPress={handleAddOrRemove}>
        <StarIcon color={checkHere ? '#000' : 'red'} />
      </S.FavoriteButton>
    </S.ChannelContainer>
  );
};

const Home: React.FC = () => {
  const [channels, setChannels] = useState();
  const [searchParam, setSearchParam] = useState('');
  const [checkIsFavorite, setCheckIsFavorite] = useState();

  const loadFavorites = useCallback(async () => {
    const realm = await getRealmApp();
    const checkFavorite = realm.objects('Favorite');

    if (checkFavorite.length > 0) {
      setCheckIsFavorite(checkFavorite);
    } else {
    }
  }, []);
  const fetchData = param => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${param}&type=video&key=AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8`,
    )
      .then(res => res.json())
      .then(data => {
        setChannels(data.items);
      });
  };
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    fetchData(searchParam);
  }, [searchParam]);

  const handleSearchChannel = () => {
    fetchData(searchParam);
  };

  return (
    <>
      <CustomHeader showFavorite />
      <S.Container>
        <S.SearchWrapper>
          <S.SearchInput
            placeholder="Channels"
            placeholderTextColor="#AFAFAF"
            value={searchParam}
            onChangeText={text => setSearchParam(text)}
          />
          <S.SearchButton onPress={handleSearchChannel}>
            <SearchIcon />
          </S.SearchButton>
        </S.SearchWrapper>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={channels}
          keyExtractor={item => String(item.id.videoId)}
          renderItem={({ item }) => (
            <ChannelItem item={item} favoriteList={checkIsFavorite} />
          )}
        />
      </S.Container>
    </>
  );
};

export default Home;
