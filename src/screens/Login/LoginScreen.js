/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {InputContainer} from '../../components/Input';
import MainStyles from '../../assets/styles';

const LoginScreen = props => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressLoginButton = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    props.navigation.navigate('Menu');
  };
  // const onPressSignUpButton = () => {
  //   props.navigation.navigate('Signup');
  // };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <InputContainer
          labelText="Correo electrónico"
          textContentType="emailAddress"
          autoCompleteType="email"
          keyboardType="email-address"
          onChange={onChangeEmail}
          value={email}
        />
        <InputContainer
          labelText="Contraseña"
          textContentType="password"
          autoCompleteType="password"
          keyboardType="email-address"
          onChange={onChangePassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPressLoginButton}
          title="Presioname">
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onPressSignUpButton} title="Presioname">
          <Text style={styles.signUpLink}>Registrarme</Text>
        </TouchableOpacity> */}
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
    backgroundColor: MainStyles.backgroundColor,
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

export default LoginScreen;
