import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FlatList, Text } from 'react-native';

// service
import axios from 'axios';
import { API_KEY } from '../../constants/index';
import getRealmApp from '../../service/realm';

import { useAuth } from '../../hooks/auth';
// components
import CustomHeader from '../../components/CustomHeader';
import SearchIcon from '../../components/_icons/SearchIcon';
import StarIcon from '../../components/_icons/StarIcon';
import StarFullIcon from '../../components/_icons/StarFullIcon';

// styles
import * as S from './styles';

type ChannelItemProps = {};

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
        <S.ChannelTitle numberOfLines={1}>
          {item.snippet.channelTitle}
        </S.ChannelTitle>
      </S.ChannelLeft>

      <S.FavoriteButton onPress={handleAddOrRemove}>
        {checkHere ? (
          <StarFullIcon color="#000000" />
        ) : (
          <StarIcon color="#000000" />
        )}
      </S.FavoriteButton>
    </S.ChannelContainer>
  );
};

const Home: React.FC = () => {
  const [channels, setChannels] = useState();
  const [searchParam, setSearchParam] = useState('');
  const [checkIsFavorite, setCheckIsFavorite] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadFavorites = useCallback(async () => {
    const realm = await getRealmApp();
    const checkFavorite = realm.objects('Favorite');

    if (checkFavorite.length > 0) {
      setCheckIsFavorite(checkFavorite);
    }
  }, []);
  const fetchData = (param: string) => {
    setLoading(true);
    setError(false);
    try {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${param}&type=video&key=AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8`,
        )
        .then(res => res.json())
        .then(data => {
          setChannels(data.items);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadFavorites();
  }, []);

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
        {channels && !error ? (
          <FlatList
            refreshing={loading}
            onRefresh={() => fetchData(searchParam)}
            showsVerticalScrollIndicator={false}
            data={channels}
            keyExtractor={item => String(item.id.videoId)}
            renderItem={({ item }) => (
              <ChannelItem item={item} favoriteList={checkIsFavorite} />
            )}
          />
        ) : (
          <S.ErrorMessage>Erro ao carregar lista</S.ErrorMessage>
        )}
      </S.Container>
    </>
  );
};

export default Home;
