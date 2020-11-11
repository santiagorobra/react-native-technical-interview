import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeTabs } from './HomeTabs';
import BookDetailScreen from '../screens/BookDetailScreen';

const Stack = createStackNavigator();

const screens = [
  {
    label: 'Home',
    route: 'Home',
    component: HomeTabs
  },
  {
    label: 'Book Detail',
    route: 'Detail',
    component: BookDetailScreen
  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {
        screens.map((screen, i) => (
          <Stack.Screen
            key={i}
            name={screen.route} 
            component={screen.component}
            options={() => ({
              headerShown: false,
            })}
          />
        ))
      }
    </Stack.Navigator>
  );
}

export default HomeStack;