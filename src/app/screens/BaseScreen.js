import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Base Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
});

export default BaseScreen;