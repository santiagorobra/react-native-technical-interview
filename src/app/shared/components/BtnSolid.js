import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { colorsApp } from '../styles/colors';

const BtnSolid = ({ title, handleButton, disabled}) => {
  return (
    <View style={styles.btnContainer}>
      <Button
        disabled={disabled}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        title={title}
        onPress={handleButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  buttonStyle: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  containerStyle: {
    width: '70%',
  },
  titleStyle: {
    color: colorsApp.primary,
  }
});

export default BtnSolid;