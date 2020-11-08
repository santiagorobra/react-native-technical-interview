import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const BtnClear = ({ title, colorTitle, handleButton}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        buttonStyle={styles.buttonStyle}
        title={title}
        type="clear"
        titleStyle={{color: colorTitle}}
        onPress={handleButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerBtn: {
    alignItems: 'center'
  },
  buttonStyle: {
    padding: 20
  },
});

export default BtnClear;