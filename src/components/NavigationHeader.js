import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-feather1s';

import {goBack} from '../utils/RootNavigation';

import {MULI_REGULAR, MULI_BLACK, WHITE_COLOR} from '../assets/styles';

import UserIndicator from './UserIndicator/';

export const NavigationHeader = props => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.returnTextContainer}>
          <Icon
            onPress={goBack}
            name="arrow-left"
            size={18}
            color={WHITE_COLOR}
            thin={false}
          />
          <Text style={styles.returnText}>
            Regresar a la pantalla de inicio
          </Text>
        </View>
        <View>
          <UserIndicator userName={props.user} />
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between'},
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
