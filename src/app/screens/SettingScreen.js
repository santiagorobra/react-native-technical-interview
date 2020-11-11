import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutAuthAction } from '../redux/actions/auth';
import BtnSolid from '../shared/components/BtnSolid';
import { HeaderTop } from '../shared/components/HeaderTop';
import { colorsApp } from '../shared/styles/colors';

const SettingScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    dispatch(logoutAuthAction());
  }

  return (
    <>
      <HeaderTop title='Settings'/>
      <View style={styles.container}>
        <BtnSolid
          colorBtn={colorsApp.primary}
          colorTxt={colorsApp.white}
          title='SALIR' 
          handleButton={handleLogout} 
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default SettingScreen;