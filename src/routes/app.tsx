import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Favorite" component={Favorite} />
  </App.Navigator>
);

export default AppRoutes;
