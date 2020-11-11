import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colorsApp } from '../shared/styles/colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.light,
  }
});

export default SplashScreen;