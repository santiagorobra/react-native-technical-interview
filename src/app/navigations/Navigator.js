import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { loginAuthAction, logoutAuthAction } from '../redux/actions/auth';
import Loading from '../shared/components/Loading';
import AuthStack from './AuthStack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const Navigator = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if(userToken) {
          dispatch(loginAuthAction(userToken));
          setChecking(false);
        } else {
          dispatch(logoutAuthAction());
          setChecking(false);
        }
      } catch (e) {
        // Restoring token failed
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
      {state.auth.userToken == null ? (
        <AuthStack/>
      ) : (
        <HomeScreen/>
      )}
    </NavigationContainer>
  );
}

export default Navigator;