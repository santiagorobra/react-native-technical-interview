import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Alert } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { loadingAction } from '../redux/actions/loadingAction';
import { detailBookAction } from '../redux/actions/detailBookAction';
import { fetchWithoutToken } from '../helpers/fetch';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTop } from '../shared/components/HeaderTop';
import { colorsApp } from '../shared/styles/colors';

const BookDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const state = useSelector(state => state);
  const { book } = state.book;

  useEffect(() => {
    handleSuggestionsBooks();
  }, []);

  const handleSuggestionsBooks = async () => {
    dispatch(loadingAction('Cargando'));
    try {
      const resp = await fetchWithoutToken('books');
      const body = await resp.json();
      if(body) {
        let temporarySug = [];
        body.forEach(b => {
          if(b.genre === book.genre && b.id !== book.id) {
            temporarySug.push(b);
          }
        });
        setSuggestions(temporarySug);
        dispatch(loadingAction(''));
      } else {
        showAlert('Error', 'Error en el servidor', () => dispatch(loadingAction('')));
      }
    } catch (err) {
      showAlert('Error', 'Error en el servidor', () => dispatch(loadingAction('')));
    }
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

  return (
    <>
      <HeaderTop title='Book Detail' iconLeft='chevron-back-outline' onPress={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        {
          suggestions.length > 0 && 
          <>
            <Text style={styles.titleBook}>Sugerencias</Text>
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                suggestions.map(suggest => (
                  <TouchableOpacity
                    key={suggest.id}
                    onPress={() => {
                      navigation.navigate('Detail');
                      dispatch(detailBookAction(suggest));
                    }} 
                    style={{alignItems: 'center', marginLeft: 25}}>
                    <Image
                      style={styles.logo}
                      source={suggest.image_url ? {uri: suggest.image_url} : require('../../assets/general/noneBook.jpg')}
                    />
                    <Text style={styles.textsBook}>{suggest.title}</Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </>
        }
        <View style={styles.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                style={styles.logo}
                source={book.image_url ? {uri: book.image_url} : require('../../assets/general/noneBook.jpg')}
              />
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.titleBook}>{book.title}</Text>
              <Text>{book.author}</Text>
              <Text style={styles.textsBook}>{book.publisher}</Text>
              <Text style={styles.textsBook}>{book.year}</Text>
              <Text style={styles.textsBook}>{book.genre}</Text>
            </View>
          </View>
          <Button
            title="ADD TO WISHLIST"
            type="outline"
            containerStyle={{marginTop: 20}}
            buttonStyle={{borderRadius: 20}}
            onPress={() => {}}
          />
          <Button
            title="RENT"
            containerStyle={{marginTop: 20}}
            buttonStyle={{borderRadius: 20}}
            onPress={() => {}}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [colorsApp.primary, colorsApp.lightGreen],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
          />
        </View>
        {
          (book.comments && book.comments.length > 0) &&
          <View style={[styles.card, {marginTop: 10}]}>
            {
              book.comments.map((l, i) => (
                <ListItem key={i}>
                  <Image source={require('../../assets/general/img_user1.png')}/>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={{color: colorsApp.muted}}>{l.comment}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity>
                <Text style={{color: colorsApp.primary, fontSize: 18}}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colorsApp.light
  },
  card: {
    flexDirection: 'column',
    padding: 25,
    borderRadius: 6,
    marginTop: 15,
    backgroundColor: colorsApp.white,
    shadowColor: colorsApp.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 110,
  },
  titleBook: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 18,
    marginBottom: 10
  },
  textsBook: {
    color: colorsApp.muted, 
    textTransform: 'capitalize'
  }
});

export default BookDetailScreen;