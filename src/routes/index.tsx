import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import AuthRoutes from './auth';
import AppRoutes from './app';

import { useAuth } from '../hooks/auth';

export const navigationRef = React.createRef<NavigationContainerRef>();

const Routes: React.FC = () => {
  const { loading } = useAuth();

  console.info(`Routes: rendering;  is []; is loading state: `);

  return (
    <NavigationContainer ref={navigationRef}>
      {false ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
