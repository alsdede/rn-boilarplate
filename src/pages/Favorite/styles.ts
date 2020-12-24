import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto-Medium';
  margin-top: 38px;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SearchInput = styled.TextInput`
  height: 40px;
  width: 280px;
  border-radius: 4px;
  background-color: #ebebeb;
  padding: 0 16px;
`;
export const SearchButton = styled.TouchableOpacity`
  background-color: #000000;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ChannelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
`;
export const ChannelLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperThumb = styled.View`
  margin-right: 18px;
`;
export const Thumb = styled.Image`
  border-radius: 4px;
  background-color: #ebebeb;
`;
export const ChannelTitle = styled.Text`
  color: #afafaf;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;
export const FavoriteButton = styled.TouchableOpacity``;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 69px;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const BackText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';

  color: #fff;
`;

export const PaginationButton = styled.TouchableOpacity`
  background: #000;

  height: 60px;
  border-radius: 4px;
`;
export const ErrorMessage = styled.Text`
  margin-top: 20px;
  color: red;
  font-size: 16px;
  font-family: 'Roboto-Bold';
`;
