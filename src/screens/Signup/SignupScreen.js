/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import DatePicker from 'react-native-datepicker';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {InputContainer, styles as InputStyles} from '../../components/Input';

const SignupScreen = props => {
  const [names, onChangeNames] = React.useState('');
  const [lastNames, onChangeLastNames] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  const [date, onChangeDate] = React.useState('');

  const onPressButton = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Registro de paciente</Text>
        <InputContainer
          labelText="Nombres"
          textContentType="emailAddress"
          autoCompleteType="email"
          keyboardType="email-address"
          onChange={onChangeNames}
          value={names}
        />
        <InputContainer
          labelText="Apellidos"
          textContentType="password"
          autoCompleteType="password"
          keyboardType="email-address"
          onChange={onChangeLastNames}
          value={lastNames}
        />
        <InputContainer
          labelText="Código"
          textContentType="password"
          autoCompleteType="password"
          keyboardType="email-address"
          onChange={onChangeCode}
          value={code}
        />
        <Text style={InputStyles.inputLabel}>Fecha de Nacimiento</Text>
        <DatePicker
          style={{width: 200}}
          date={date}
          mode="date"
          placeholder="Seleccionar fecha"
          format="YYYY-MM-DD"
          minDate="2000-01-01"
          maxDate="2020-01-01"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateInput: {
              marginLeft: 0,
              backgroundColor: 'white',
              height: 30,
            },
            placeholderText: {color: 'black', fontSize: 16},
            dateText: {color: 'white', fontSize: 18},
          }}
          onDateChange={onChangeDate}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPressButton}
          title="Presioname">
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressButton} title="Presioname">
          <Text style={styles.signUpLink}>Iniciar sesión</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232323',
  },
  title: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 220,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  signUpLink: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
});

export default SignupScreen;
