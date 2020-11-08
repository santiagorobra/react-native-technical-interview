import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const InputSolid = ({ label, keyInput, password, handleInputChange}) => {
  return (
    <View>
      <Text style={styles.textInputs}>{label}</Text>
      <Input
        onChange={(e) => handleInputChange(e, keyInput)}
        inputContainerStyle={styles.inputContainerStyle}
        password={password}
        secureTextEntry={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputs: {
    color: '#FFF',
    fontSize: 15
  },
  inputContainerStyle: {
    backgroundColor: '#FFF',
    marginLeft: -10,
    marginTop: 8,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
});

export default InputSolid;