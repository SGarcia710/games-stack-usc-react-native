import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {startGuestSession} from '../../redux/actions/auth';
import {Header, Button} from '../../components';
import {
  PURPLE_COLOR,
  WHITE_COLOR,
  DARK_BLUE_COLOR,
  LIGHT_GREEN_COLOR,
  LIGHT_PURPLE_COLOR,
} from '../../assets/styles';

const LandingScreen = props => {
  const onPressGuestSessionButton = () => {
    props.startGuestSession();
    props.navigation.navigate('Menu');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="Ingresa a" subtitle="GamesStack" />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={onPressGuestSessionButton}
          text="Entrar como invitado"
          icon="users"
          iconPosition="left"
          backgroundColor={LIGHT_PURPLE_COLOR}
          fontColor={WHITE_COLOR}
          marginBottom={23}
          marginForText={20}
        />
        <Button
          onPress={() => props.navigation.navigate('Login')}
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
