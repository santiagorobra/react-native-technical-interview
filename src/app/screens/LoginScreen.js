import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  ScrollView,
  View,
  Image,
  Alert,
  Text,
  ImageBackground,
  Platform
} 
from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { loginAuthAction } from '../redux/actions/auth';
import { loadingAction } from '../redux/actions/loadingAction';
import { useForm } from '../hooks/useForm';
import { fetchWithoutToken } from '../helpers/fetch';
import { validateEmail } from '../utils/validations';

import { CheckBox } from 'react-native-elements';
import BtnSolid from '../shared/components/BtnSolid';
import InputSolid from '../shared/components/InputSolid';
import { colorsApp } from '../shared/styles/colors';

const LoginScreen = () => {
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
      validateInputs();
    } else {
      let rangeAge = [];
      for (let index = 18; index < 100; index++) {
        let value = index.toString()
        rangeAge.push({label: value, value});
      }
      setAges(rangeAge);
    }
  }, [inputsName]);


  const validateInputs = () => {
    if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || age.trim() === '') {
      setDisabledBtn(true);
      return;
    }
    if(!validateEmail(email)) {
      setDisabledBtn(true);
      return;
    }
    if(!termsAndCond) {
      setDisabledBtn(true);
      return;
    }
    setDisabledBtn(false);
  } 

  const handleLogin = async () => {
    dispatch(loadingAction('Cargando'));
    try {
      const resp = await fetchWithoutToken('sign_in', formValues, 'POST');
      const body = await resp.json();
      if(body) {
        await AsyncStorage.setItem('userWbooks', JSON.stringify(formValues));
        dispatch(loadingAction(''));
        dispatch(loginAuthAction(formValues));
      } else {
        showAlert('Error', 'Datos invalidos', () => dispatch(loadingAction('')));
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
          <View style={{ ...(Platform.OS !== 'android'  &&  {zIndex : 10}), flex: 1, paddingRight: 10}}>
            <Text style={{color: colorsApp.light, marginBottom: 2}}>Edad:</Text>
            <DropDownPicker
              items={ages}
              searchable={true}
              searchablePlaceholder='Buscar..'
              placeholder='Edad'
              defaultValue={formValues.age}
              style={{backgroundColor: colorsApp.light, borderColor: colorsApp.light}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={itemValue => handleInputChange({ nativeEvent: { text: itemValue.value } }, 'age')}
            />
          </View>
          <CheckBox
            checked={formValues.termsAndCond}
            onPress={() => handleInputChange({ nativeEvent: { text: !formValues.termsAndCond } }, 'termsAndCond')}
            containerStyle={styles.checkContainer}
            textStyle={styles.textStyle}
            title='Aceptar términos y condiciones'
            checkedColor={colorsApp.light}
          />
          <BtnSolid
            colorBtn={colorsApp.white}
            colorTxt={colorsApp.primary}
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
    marginTop: 30,
  },
  checkContainer: {
    marginTop: 20,
    marginLeft: 0,
    backgroundColor: 'transparent', 
    borderWidth: 0 
  },
  textStyle: {
    fontWeight: '400', 
    color: colorsApp.light
  },
});

export default LoginScreen;