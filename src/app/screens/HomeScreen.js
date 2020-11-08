import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { colorsApp } from '../shared/styles/colors';

const HomeScreen = ({navigation}) => {
  const screens = [
    {
      route: 'Listas',
      label: 'Mis pedidos',
      img: require('../../assets/grupoOl/misPedidos.png')
    },
    {
      route: 'Formulario',
      label: 'Solicitar transporte',
      img: require('../../assets/grupoOl/solTransporte.png')
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          screens.map((screen, i) => (
            <TouchableOpacity
              key={i}
              style={styles.containerList}
              onPress={() => {
                navigation.navigate(screen.route)
              }}
            >
              <Image
                style={styles.logo}
                source={screen.img}
              />
              <Text style={styles.text}>{screen.label}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colorsApp.primary,
    justifyContent: 'space-between'
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    padding: 25,
    borderRadius: 18,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 70,
    height: 70
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 20,
    maxWidth: '70%',
    color: '#000'
  },
  logo: {
    width: 70,
    height: 70
  },
});

export default HomeScreen;