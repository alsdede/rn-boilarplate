import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Sign from '../pages/Sign';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000' },
    }}
  >
    <Auth.Screen name="Sign" component={Sign} />
  </Auth.Navigator>
);

export default AuthRoutes;
