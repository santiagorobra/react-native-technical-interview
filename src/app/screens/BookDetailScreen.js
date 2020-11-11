import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderTop } from '../shared/components/HeaderTop';
import { colorsApp } from '../shared/styles/colors';

const BookDetailScreen = ({navigation}) => {
  return (
    <>
      <HeaderTop title='Book Detail' iconLeft='chevron-back-outline' onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text>Base Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsApp.light
  }
});

export default BookDetailScreen;