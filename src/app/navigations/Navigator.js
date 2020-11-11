import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { loginAuthAction, logoutAuthAction } from '../redux/actions/auth';
import Loading from '../shared/components/Loading';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeStack from './HomeStack';

const Navigator = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      // AsyncStorage.clear();
      let user;
      try {
        user = await AsyncStorage.getItem('userWbooks');
        if(user) {
          dispatch(loginAuthAction(user));
          setChecking(false);
        } else {
          dispatch(logoutAuthAction());
          setChecking(false);
        }
      } catch (e) {
      }
    };
    bootstrapAsync();
  }, [setChecking]);

  if (state.auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Loading/>
      {state.auth.user == null ? (
        <LoginScreen/>
      ) : (
        <HomeStack/>
      )}
    </NavigationContainer>
  );
}

export default Navigator;