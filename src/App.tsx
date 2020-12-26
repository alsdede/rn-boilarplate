import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import FlashMessage from 'react-native-flash-message';
// hooks
import AppProvider from './hooks';

import Routes from './routes';

// css
import theme from './styles/theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
        <FlashMessage floating />
      </AppProvider>
    </ThemeProvider>
  </>
);

export default App;
