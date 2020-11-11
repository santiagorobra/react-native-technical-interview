import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { colorsApp } from '../styles/colors';

export const HeaderTop = ({title, iconLeft, iconRight}) => {
  return (
    <Header
      backgroundImage={require('../../../assets/general/bc_navbar.png')}
      backgroundImageStyle={{height: 120}}
      backgroundColor={colorsApp.light}
      containerStyle={styles.containerHeader}
      leftContainerStyle={styles.mtHeaderElements}
      centerContainerStyle={styles.mtHeaderElements}
      rightContainerStyle={styles.mtHeaderElements}
      leftComponent={iconLeft && { icon: iconLeft, color: colorsApp.white }}
      centerComponent={{ text: title.toUpperCase(), style: { color: colorsApp.white } }}
    />
  )
}
const styles = StyleSheet.create({
  mtHeaderElements: {
    marginTop: -30
  },
  containerHeader: {
    height: 120,
    marginTop: -30,
    paddingLeft: 20,
    paddingRight: 20
  }
});