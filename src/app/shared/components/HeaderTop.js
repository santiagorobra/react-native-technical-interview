import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { colorsApp } from '../styles/colors';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HeaderTop = ({title, iconLeft, onPress}) => {
  return (
    <Header
      backgroundImage={require('../../../assets/general/bc_navbar.png')}
      backgroundImageStyle={{height: 120}}
      backgroundColor={colorsApp.light}
      containerStyle={styles.containerHeader}
      leftContainerStyle={styles.mtHeaderElements}
      centerContainerStyle={styles.mtHeaderElements}
      rightContainerStyle={styles.mtHeaderElements}
      leftComponent={<CustomLeftComponent name={iconLeft} onPressAction={onPress}/>}
      centerComponent={{ text: title.toUpperCase(), style: styles.title }}
    />
  )
}

const CustomLeftComponent = ({name, onPressAction}) => {
  return (
    <TouchableOpacity onPress={onPressAction}>
      <Icon
        name={name}
        type='ionicon'
        color={colorsApp.white}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colorsApp.white, 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  mtHeaderElements: {
    marginTop: -30
  },
  containerHeader: {
    height: 120,
    marginTop: Platform.OS === 'ios' ? -30 : 0,
    paddingLeft: 20,
    paddingRight: 20
  }
});