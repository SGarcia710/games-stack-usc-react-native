import React from 'react';

import {StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';

import {Header, Button, Input} from '../../components';

import {
  BACKGROUND_COLOR,
  DARK_FONT_COLOR,
  LIGHT_YELLOW_COLOR,
} from '../../assets/styles';

const LoginScreen = props => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const onPressLoginButton = () => {
    props.checkUser(email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <Header title="Bienvenido" subtitle="nuevamente a GamesStack" />
        </View>
        <View style={styles.form}>
          <Input
            labelText="Correo electrónico"
            keyboardType="email-address"
            onChange={onChangeEmail}
            value={email}
            placeholder="Ingresa tu correo"
            marginBottom={32}
          />
          <Input
            labelText="Contraseña"
            secureTextEntry={true}
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
            fontColor={DARK_FONT_COLOR}
            marginBottom={23}
            marginForText={132}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
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
