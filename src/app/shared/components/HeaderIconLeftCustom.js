import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const HeaderIconLeftCustom = ({icon, type, onPress}) => {
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View style={[styles.header, { width: deviceWidth }]}>
      <Button
        onPress={onPress}
        type="clear"
        icon={
          <Icon
            color='#000'
            name={icon}
            size={25}
            type={type}
          />
        }
      />
      <Image source={require('../../../assets/grupoOl/logo.png')} style={styles.logo} />
      <Button
        onPress={() => {}}
        type="clear"
        icon={
          <Icon
            color='#FFF'
            name={icon}
            size={25}
            type={type}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: "45%",
    height: 35
  }
});

export default HeaderIconLeftCustom;