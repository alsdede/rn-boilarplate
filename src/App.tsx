import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

// hooks
// import AppProvider from './hooks'
import { AuthProvider } from './hooks/auth';

import Routes from './routes';

// css
import theme from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </>
);

export default App;
