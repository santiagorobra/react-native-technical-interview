import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Overlay } from 'react-native-elements';
import { colorsApp } from '../styles/colors';

export default function Loading() {
  const state = useSelector(state => state);
  return (
    <Overlay
      isVisible={state.loadingStore.message ? true : false}
      windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      overlayBackgroundColor="trasnparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color={colorsApp.primary}/>
        {state.loadingStore.message && <Text style={styles.text}>{state.loadingStore.message}</Text>}
      </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: colorsApp.light,
    borderColor: colorsApp.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colorsApp.primary,
    textTransform: 'uppercase',
    marginTop: 10
  }
})