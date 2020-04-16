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

import {MenuButton} from '../../components/MenuButton';
import MainStyles from '../../assets/styles';

const MenuScreen = props => {
  const onPressRegisterStudent = () => {
    props.navigation.navigate('RegisterStudent');
  };
  const onPressStudentsList = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    // props.navigation.navigate('GameOne');
    console.log('Lista de estudiantes');
  };
  const onPressEvaluateStudent = () => {
    props.navigation.navigate('GamesMenu');
    // console.log('Menu de estudiantes');
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Games Stack</Text>
        <MenuButton
          onPress={onPressRegisterStudent}
          text="Registrar estudiante"
        />
        <MenuButton onPress={onPressStudentsList} text="Lista de estudiantes" />
        <MenuButton
          onPress={onPressEvaluateStudent}
          text="Evaluar estudiante"
        />
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
});

export default MenuScreen;
