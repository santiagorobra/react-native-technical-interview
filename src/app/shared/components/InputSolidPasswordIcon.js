import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const InputSolidPasswordIcon = ({ label, keyInput, handleInputChange, showHidePassword, setShowHidePassword}) => {
  return (
    <View>
      <Text style={styles.textInputs}>{label}</Text>
      <Input
        onChange={(e) => handleInputChange(e, keyInput)}
        inputContainerStyle={styles.inputContainerStyle}
        secureTextEntry={!showHidePassword}
        rightIcon={
          <Icon
            onPress={() => setShowHidePassword(!showHidePassword)}
            name={!showHidePassword ? 'eye-slash' : 'eye'}
            size={24}
            color='black'
            type="font-awesome-5"
          />
        }
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

export default InputSolidPasswordIcon;