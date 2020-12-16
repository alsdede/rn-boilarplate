import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

// css
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="light-content" />
  </ThemeProvider>
);

export default App;
