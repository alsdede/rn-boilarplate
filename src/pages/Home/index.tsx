import React, { useEffect, useState } from 'react';
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

const mock = [
  {
    id: 1,
    title: 'Channel 1',
  },
  {
    id: 2,
    title: 'Channel 2',
  },
  {
    id: 3,
    title: 'Channel 3',
  },
  {
    id: 4,
    title: 'Channel 4',
  },
];

const ChannelItem = ({ item }) => {
  const handleAddOrRemove = () => {};

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

      <S.FavoriteButton>
        <StarIcon color="#000" />
      </S.FavoriteButton>
    </S.ChannelContainer>
  );
};

const Home: React.FC = () => {
  const [channels, setChannels] = useState();
  const [searchParam, setSearchParam] = useState('');
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
    fetchData(searchParam);
  }, []);

  const handleSearchChannel = () => {
    fetchData(searchParam);
  };
  console.log('RETURN CHANEL==>', channels);
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
          renderItem={({ item }) => <ChannelItem item={item} />}
        />
      </S.Container>
    </>
  );
};

export default Home;
