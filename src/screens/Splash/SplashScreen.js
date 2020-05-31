/*

  El Splash screen deberá mostrar los logos de las dos universidades involucradas en el proyecto. Este durará 5 segundos y luego redireccionará al Landing Screen.

*/

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {BACKGROUND_COLOR} from '../../assets/styles/';
import {FadeIn} from '../../components';
import LogoUNACH from '../../assets/images/LogoUNACH.png';

const SplashScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <FadeIn>
        <Image style={styles.logo} source={LogoUNACH} />
      </FadeIn>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
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
