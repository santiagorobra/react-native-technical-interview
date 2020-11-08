import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderIconLeftCustom from '../shared/components/HeaderIconLeftCustom';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const screens = [
  {
    label: 'Login',
    route: 'Login',
    component: LoginScreen
  },
];
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {
        screens.map((screen, i) => (
          <Stack.Screen
            key={i}
            name={screen.route} 
            component={screen.component}
            options={({navigation}) => ({
              headerShown: screen.label === 'Login' ? false : true,
              title: screen.label,
              headerTintColor: 'transparent',
              headerStyle: styles.headerStyle,
              headerLeft: () => (
                <HeaderIconLeftCustom 
                  icon='doubleleft'
                  type="antdesign"
                  onPress={() => navigation.goBack()}
                />
              )
            })}
          />
        ))
      }
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  }
});

export default AuthStack;