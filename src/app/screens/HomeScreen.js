import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList,
  Platform,
  Alert,
  Animated
} 
from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loadingAction } from '../redux/actions/loadingAction';
import { detailBookAction } from '../redux/actions/detailBookAction';
import { fetchWithoutToken } from '../helpers/fetch';
import { colorsApp } from '../shared/styles/colors';
import { HeaderTop } from '../shared/components/HeaderTop';
import { useDebounce } from '../hooks/useDebounce';

const HomeScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedState, setDebouncedState] = useDebounce(search);
  const [animation] = useState(new Animated.Value(0));

  const dispatch = useDispatch();

  useEffect(() => {
    handleBooks(debouncedState);
  }, [debouncedState]);

  const handleBooks = async (searchValue) => {
    dispatch(loadingAction('Cargando'));
    try {
      let api = searchValue ? `books?q=${searchValue}` : 'books';
      const resp = await fetchWithoutToken(api);
      const body = await resp.json();
      if(body) {
        setBooks(body);
        dispatch(loadingAction(''));
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false
        }).start();
      } else {
        showAlert('Error', 'Error en el servidor', () => dispatch(loadingAction('')));
      }
    } catch (err) {
      showAlert('Error', 'Error en el servidor', () => dispatch(loadingAction('')));
    }
  }

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
    setDebouncedState(searchValue);
  }

  const showAlert = (title, message, onPress = () => {}) => {
    Alert.alert(
      title,
      message,
      [{
        text: 'OK',
        onPress
      }]
    )
  } 

  let keyExtractor = (item, index) => index.toString();

  let renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.containerList}
      onPress={() => {
        navigation.navigate('Detail');
        dispatch(detailBookAction(item));
      }}
    >
      <Animated.Image
        style={[styles.logo, {opacity: animation}]}
        source={ item.image_url ? {uri: item.image_url} : require('../../assets/general/noneBook.jpg')}
      />
      <Animated.View style={{opacity: animation}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.publisher}</Text>
      </Animated.View>
    </TouchableOpacity>
  )

  return (
    <>
      <HeaderTop 
        title='Library' 
        iconLeft='notifications-outline' 
        onPress={() => showAlert('Función no disponible', 'Lo sentimos las notificaciones no están disponibles en esta versión')}/>
      <SearchBar
        onChangeText={handleSearch}
        value={search}
        platform={Platform.OS}
        placeholder="Buscar Libro..."
        cancelIcon={true}
        inputContainerStyle={styles.inputContainerSearch}
        containerStyle={styles.containerSearch}
      />
      <View style={styles.container}>
        {
          books.length < 1 && <Text style={styles.title}>Sin resultados</Text>
        }
        <FlatList
          keyExtractor={keyExtractor}
          data={books}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colorsApp.light,
    justifyContent: 'space-between',
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    padding: 20,
    borderRadius: 6,
    backgroundColor: colorsApp.white,
    shadowColor: colorsApp.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2,
  },
  logo: {
    width: 60,
    height: 80
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 20,
    color: colorsApp.black,
    maxWidth: '90%'
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    color: colorsApp.muted,
    maxWidth: '90%'
  },
  inputContainerSearch: {
    backgroundColor: colorsApp.white, 
    borderRadius: 10
  },
  containerSearch: {
    backgroundColor: colorsApp.light, 
    paddingLeft: 15, 
    paddingRight: 15
  }
});

export default HomeScreen;