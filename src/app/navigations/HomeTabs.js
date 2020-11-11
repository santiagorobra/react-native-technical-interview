import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import WishlistScreen from '../screens/WishlistScreen';

const Tab = createBottomTabNavigator();

const screens = [
  {
    route: 'Library',
    iconNameActive: require('../../assets/toolBar/ic_library.png'),
    iconName: require('../../assets/toolBar/ic_library_active.png'),
    component: HomeScreen
  },
  {
    route: 'Wishlist',
    iconNameActive: require('../../assets/toolBar/ic_wishlist.png'),
    iconName: require('../../assets/toolBar/ic_wishlist_active.png'),
    component: WishlistScreen
  },
  {
    route: 'Settings',
    iconNameActive: require('../../assets/toolBar/ic_settings.png'),
    iconName: require('../../assets/toolBar/ic_settings_active.png'),
    component: SettingScreen
  },
];

export const HomeTabs = () => {
  return (
    <Tab.Navigator>
      {
        screens.map((screen, i) => (
          <Tab.Screen
            key={i}
            name={screen.route} 
            component={screen.component}
            options={() => ({
              tabBarIcon: ({ focused }) => 
                <Image
                  style={{height: 30, width: 30, marginRight: 5}}
                  source={ !focused ? screen.iconNameActive : screen.iconName}
                />
              ,
            })}
          />
        ))
      }
    </Tab.Navigator>
  )
}
