import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import {
  PURPLE_COLOR,
  WHITE_COLOR,
  DARK_BLUE_COLOR,
  LIGHT_GREEN_COLOR,
  LIGHT_PURPLE_COLOR,
} from '../../assets/styles';

const LandingScreen = props => {
  const onPressButton = where => {
    props.navigation.navigate(where);
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="Ingresa a" subtitle="GamesStack" />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => onPressButton('Menu')}
          text="Entrar como invitado"
          icon="users"
          iconPosition="left"
          backgroundColor={LIGHT_PURPLE_COLOR}
          fontColor={WHITE_COLOR}
          marginBottom={23}
          marginForText={20}
        />
        <Button
          onPress={() => onPressButton('Login')}
          text="Entrar con cuenta de usuario"
          icon="arrow-right"
          iconPosition="right"
          backgroundColor={LIGHT_GREEN_COLOR}
          fontColor={DARK_BLUE_COLOR}
          marginForText={15}
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
  buttons: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingScreen;
