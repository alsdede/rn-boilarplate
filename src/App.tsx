import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

// css
import theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Routes />
      </View>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
