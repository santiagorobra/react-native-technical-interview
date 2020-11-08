import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  ScrollView,
  View,
  Image,
  Alert,
  ImageBackground
} 
from 'react-native';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { loginAuthAction } from '../redux/actions/auth';
import { loadingAction } from '../redux/actions/loadingAction';
import { useForm } from '../hooks/useForm';
import { fetchWithoutToken } from '../helpers/fetch';

import { CheckBox } from 'react-native-elements';
import BtnSolid from '../shared/components/BtnSolid';
import InputSolid from '../shared/components/InputSolid';

const LoginScreen = ({ navigation }) => {
  const initialForm = {
    name: '',
    lastname: '',
    email: '',
    age: '',
    termsAndCond: false
  };
  
  const inputsName = [
    {
      label: 'Nombre:',
      keyInput: 'name'
    },
    {
      label: 'Apellido:',
      keyInput: 'lastname'
    },
    {
      label: 'Correo:',
      keyInput: 'email'
    },
  ];
  const [ages, setAges] = useState([]);
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  const {
    name,
    lastname,
    email,
    age,
    termsAndCond
  } = formValues;

  useEffect(() => {
    if(ages.length > 0) {
      let rangeAge = [];
      for (let index = 1; index < 100; index++) {
        rangeAge.push(index.toString());
      }
      setAges(rangeAge);
    }

    validateInputs();

  }, [inputsName]);


  const validateInputs = () => {
    if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || age.trim() === '') {
      setDisabledBtn(true);
    }
    if(!termsAndCond) {
      setDisabledBtn(true);
    }
  } 

  const handleLogin = async () => {
    dispatch(loadingAction('Cargando'));
    // try {
    //   const resp = await fetchWithoutToken('auth', {
    //     "email": email,
    //     "password": password
    //   }, 'POST');
    //   const body = await resp.json();
    //   console.log(body);
    //   if(body.ok) {
    //     await AsyncStorage.setItem('userToken', body.token);
    //     dispatch(loadingAction(''));
    //     dispatch(loginAuthAction(email));
    //   } else {
    //     showAlert('Error', 'Usuario o contraseña invalidos', () => dispatch(loadingAction('')));
    //   }
    // } catch (err) {
    //   console.log(err);
    //   showAlert('Error', 'Error en el servidor', () => dispatch(loadingAction('')));
    // }
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
    <ImageBackground source={ require('../../assets/general/bc_inicio.png') } style={styles.image}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/groupLogo.png')}
            resizeMode='contain'
            style={styles.logo}
          />
        </View>
        <View style={styles.containerFormLogin}>
          {
            inputsName.map(({label, keyInput}, i) => (
              <InputSolid
                key={i}
                label={label}
                keyInput={keyInput}
                handleInputChange={handleInputChange}
              />
            ))
          }
          <Picker
            itemStyle={{height: 44}}
            selectedValue={formValues.age}
            style={{ height: 50, width: '100%', marginTop: 2}}
            onValueChange={itemValue => handleInputChange({ nativeEvent: { text: itemValue } }, 'age')
            }>
            <Picker.Item label="Edad..." value="" />
            {
              ages.map(range =>
                (<Picker.Item key={range} label={range} value={range}></Picker.Item>)
              )
            }
          </Picker>
          <CheckBox
            checked={formValues.termsAndCond}
            onPress={() => handleInputChange({ nativeEvent: { text: !formValues.termsAndCond } }, 'termsAndCond')}
            containerStyle={styles.checkContainer}
            textStyle={styles.textStyle}
            title='Acepta terminos y condiciones'
          />
          <BtnSolid
            disabled={disabledBtn}
            title='INICIAR SESIÓN' 
            handleButton={handleLogin} 
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: '8%'
  },
  logo: {
    width: "70%",
    height: 120,
  },
  containerFormLogin: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30
  },
  checkContainer: {
    marginLeft: 0, 
    width: '100%', 
    backgroundColor: 'transparent', 
    borderWidth: 0 
  },
  textStyle: {
    fontWeight: '400', 
    color: '#FFF'
  }
});

export default LoginScreen;