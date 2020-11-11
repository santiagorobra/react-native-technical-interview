import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const BtnSolid = ({ title, handleButton, disabled, colorBtn, colorTxt}) => {
  return (
    <View style={styles.btnContainer}>
      <Button
        disabled={disabled}
        buttonStyle={[styles.buttonStyle, {backgroundColor: colorBtn}]}
        containerStyle={styles.containerStyle}
        titleStyle={{color: colorTxt}}
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
  },
  containerStyle: {
    width: '70%',
  },
});

export default BtnSolid;