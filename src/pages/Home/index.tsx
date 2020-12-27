import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// service
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import getRealmApp from '../../service/realm';

// components
import CustomHeader from '../../components/CustomHeader';
import SearchIcon from '../../components/_icons/SearchIcon';
import StarIcon from '../../components/_icons/StarIcon';
import StarFullIcon from '../../components/_icons/StarFullIcon';

// styles
import * as S from './styles';

const RenderFooterPagination = ({ handlePrevious, handleNext }) => {
  return (
    <S.WrapperPaginationButton>
      <S.PaginationButton onPress={handlePrevious}>
        <S.PaginationText>Voltar</S.PaginationText>
      </S.PaginationButton>
      <S.PaginationButton onPress={handleNext}>
        <S.PaginationText>Próxima</S.PaginationText>
      </S.PaginationButton>
    </S.WrapperPaginationButton>
  );
};

const ChannelItem = ({ item, favoriteList }) => {
  const [checkHere, setCheckHere] = useState(false);
  // useEffect(() => {
  //   setCheckHere();
  // }, [favoriteList, item]);

  const handleAddOrRemove = useCallback(async () => {
    const realm = await getRealmApp();

    const check = realm
      .objects('Favorite')
      .filtered('id == $0', item.snippet.channelId);

    if (Object.keys(check).length > 0) {
      realm.write(() => {
        realm.delete(
          realm
            .objects('Favorite')
            .filtered('id == $0', item.snippet.channelId),
        );
      });
      setCheckHere(false);
    } else {
      realm.write(() => {
        const data = {
          id: item.snippet.channelId,
          title: item.snippet.channelTitle,
          thumb: item.snippet.thumbnails.default.url,
        };
        realm.create('Favorite', data);
      });
      setCheckHere(true);
    }
  }, [
    item.snippet.channelId,
    item.snippet.thumbnails.default.url,
    item.snippet.channelTitle,
  ]);

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
  const [favoriteList, setFavoriteList] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState();
  const [previousPageToken, setPreviousPageToken] = useState();
  const [totalPages, setTotalPages] = useState<number>();
  const KEY = 'AIzaSyDYhkF6zlZDYLJvp89QnzjxBmmfQEoNMo8';
  const navigation = useNavigation();

  const loadFavorites = useCallback(async () => {
    const realm = await getRealmApp();
    const checkFavorite = realm.objects('Favorite');

    if (checkFavorite.length > 0) {
      setFavoriteList(checkFavorite);
    }
  }, []);
  const fetchData = useCallback(async (searchParam, pageToken) => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            q: searchParam,
            key: KEY,
            maxResults: 10,
            type: 'channel',
            pageToken,
          },
        },
      );

      if (data) {
        const totalPages = Math.ceil(
          data.pageInfo.totalResults / data.pageInfo.resultsPerPage,
        );
        setChannels(data.items);
        setTotalPages(totalPages);
        setNextPageToken(data.nextPageToken);
        setPreviousPageToken(data.prevPageToken);
        setLoading(false);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData(searchParam);
    });
  }, [navigation]);

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
        {channels ? (
          <FlatList
            refreshing={loading}
            onRefresh={() => fetchData(searchParam)}
            showsVerticalScrollIndicator={false}
            data={channels}
            keyExtractor={item => String(item.snippet.channelId)}
            renderItem={({ item }) => (
              <ChannelItem item={item} favoriteList={favoriteList} />
            )}
          />
        ) : (
          <S.ErrorMessage>Error loading list</S.ErrorMessage>
        )}
        <RenderFooterPagination
          handleNext={() => fetchData(searchParam, nextPageToken)}
          handlePrevious={() => fetchData(searchParam, previousPageToken)}
        />
      </S.Container>
    </>
  );
};

export default Home;
