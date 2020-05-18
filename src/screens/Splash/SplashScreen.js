/*

  El Splash screen deberá mostrar los logos de las dos universidades involucradas en el proyecto. Este durará 5 segundos y luego redireccionará al Landing Screen.

*/

import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';

import {PURPLE_COLOR} from '../../assets/styles/';

import LogoUNACH from '../../assets/images/LogoUNACH.png';

const SplashScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar hidden={true} />
      <Image style={styles.logo} source={LogoUNACH} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default SplashScreen;
