import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/redux/store/store';

import Navigator from './src/app/navigations/Navigator';
import { colorsApp } from './src/app/shared/styles/colors';

const App = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator/>
        </Provider>
      </SafeAreaView>
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;