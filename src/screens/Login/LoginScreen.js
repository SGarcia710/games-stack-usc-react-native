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

const LoginScreen = props => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressLoginButton = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    props.navigation.navigate('GameOne');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Bienvenido</Text>
        <View>
          <Text style={styles.text}>Correo electrónico:</Text>
          <TextInput
            textContentType="emailAddress"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            onChange={text => {
              onChangeEmail(text.nativeEvent.text);
            }}
            value={email}
          />
        </View>
        <View>
          <Text style={styles.text}>Contraseña:</Text>
          <TextInput
            textContentType="password"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="password"
            style={styles.input}
            onChange={text => {
              // console.log(text.nativeEvent.text);
              onChangePassword(text.nativeEvent.text);
            }}
            value={password}
          />
        </View>
        {/* <Button
          onPress={onPressLoginButton}
          title="Iniciar sesión"
          color="#841584"
        /> */}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPressLoginButton}
          title="Presioname">
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 250,
    backgroundColor: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    // width: 180,
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
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232323',
    paddingHorizontal: 12,
  },
});

export default LoginScreen;
