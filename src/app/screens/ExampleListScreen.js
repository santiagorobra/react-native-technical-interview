import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchWithToken } from '../helpers/fetch';
import { loadingAction } from '../redux/actions/loadingAction';

const ExampleListScreen = () => {
  const dispatch = useDispatch();
  const [listOrdes, setListOrdes] = useState([]);

  useEffect(() => {
    dispatch(loadingAction('Cargando'));
    const getOrders = async () => {
      try {
        const resp = await fetchWithToken('orders');
        const body = await resp.json();
        dispatch(loadingAction(''));
        if(body.ok) {
          let listAux = [];
          console.log(body)
          body.orders.map(list => {
            listAux.push({
              date: list.date,
              placeRemove: list.placeRemove,
              placeOn: list.placeOn,
              typeUnits: list.typeUnits,
              companion: list.companion,
              observation: list.observation
            });
          });
          setListOrdes(listAux);
        }
      } catch (err) {
        console.log(err);
        showAlert('Error en el servidor', () => dispatch(loadingAction('')));
      }
    }
    getOrders();
  }, []);

  const showAlert = (message, onPress = () => {}) => {
    Alert.alert(
      'Error',
      message,
      [{
        text: 'OK',
        onPress
      }]
    )
  } 

  let keyExtractor = (item, index) => index.toString();

  let renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 0.5 }}>
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>Fecha y Hora:</Text>
        <Text style={styles.subtitleList}>{item.date}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>Lugar de carga:</Text>
        <Text style={styles.subtitleList}> {item.placeRemove}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>Lugar de descarga:</Text>
        <Text style={styles.subtitleList}> {item.placeOn}</Text>
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>Tipo de unidad:</Text>
        <Text style={styles.subtitleList}> {item.typeUnits}</Text>
      </View>
      {
        item.companion ? (
          <Text style={styles.titleList}>
            Requiere acompañante
           </Text>
        ) : null
      }
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>Observaciones:</Text>
        <Text style={styles.subtitleList}> {item.observation}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={{ color: '#FFF', fontSize: 18, marginLeft: 10 }}>Mis pedidos</Text>
      </View>
      {
        listOrdes.length > 0
          ?
          (
            <FlatList
              keyExtractor={keyExtractor}
              data={listOrdes}
              renderItem={renderItem}
            />
          ) 
          :
          <View style={styles.viewEmpty}>
            <Text style={{fontSize: 20}}>No tienes pedidos</Text>
          </View>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    backgroundColor: '#333333',
    padding: 20
  },
  containerItem: {
    flexDirection: 'row'
  },
  titleList: {
    fontWeight: 'bold',
    marginBottom: 2
  },
  subtitleList: {
    color: 'grey'
  },
  viewEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ExampleListScreen;