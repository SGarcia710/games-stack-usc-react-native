import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-feather1s';

import {goBack} from '../utils/RootNavigation';

import {MULI_REGULAR, MULI_BLACK, WHITE_COLOR} from '../assets/styles';

const NavigationHeader = ({title}) => {
  return (
    <View>
      <View style={styles.returnTextContainer}>
        <Icon
          onPress={goBack}
          name="arrow-left"
          size={18}
          color={WHITE_COLOR}
          thin={false}
        />
        <Text style={styles.returnText}> Regresar a la pantalla de inicio</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  returnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnText: {
    marginLeft: 12,
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_REGULAR,
  },
  title: {
    color: WHITE_COLOR,
    fontSize: 48,
    fontFamily: MULI_BLACK,
  },
});

export default NavigationHeader;
