import React from 'react';

import {StyleSheet, View} from 'react-native';

import {Header, Button, Input} from '../../components';

import {
  PURPLE_COLOR,
  BROWN_COLOR,
  LIGHT_YELLOW_COLOR,
} from '../../assets/styles';

const LoginScreen = props => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressLoginButton = () => {
    props.checkUser(email, password);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="Bienvenido" subtitle="nuevamente a GamesStack" />
      </View>
      <View style={styles.form}>
        <Input
          labelText="Correo electrónico"
          textContentType="emailAddress"
          autoCompleteType="email"
          keyboardType="email-address"
          onChange={onChangeEmail}
          value={email}
          placeholder="Ingresa tu correo"
          marginBottom={32}
        />
        <Input
          labelText="Contraseña"
          textContentType="password"
          autoCompleteType="password"
          keyboardType="email-address"
          onChange={onChangePassword}
          value={password}
          placeholder="Ingresa tu contraseña"
          marginBottom={52}
        />
        <Button
          onPress={onPressLoginButton}
          text="Iniciar sesión"
          icon="arrow-right"
          iconPosition="right"
          backgroundColor={LIGHT_YELLOW_COLOR}
          fontColor={BROWN_COLOR}
          marginBottom={23}
          marginForText={132}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: PURPLE_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
  },
  header: {
    width: '100%',
    height: '20%',
  },
  form: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default LoginScreen;
