import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderTop } from '../shared/components/HeaderTop';
import { colorsApp } from '../shared/styles/colors';

const WishlistScreen = () => {
  return (
    <>
      <HeaderTop title='Wishlist'/>
      <View style={styles.container}>
        <Text style={styles.title}>Pantalla Wishlist</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 20,
    color: colorsApp.black,
  },
});

export default WishlistScreen;