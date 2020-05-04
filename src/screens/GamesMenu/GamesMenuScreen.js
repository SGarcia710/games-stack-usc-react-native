import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';

import Button from '../../components/Button';
import {
  PURPLE_COLOR,
  LIGHT_PURPLE_COLOR,
  WHITE_COLOR,
} from '../../assets/styles';

const GamesMenuScreen = props => {
  const [selectedStudent, setSelectedStudent] = useState('');

  const students = [
    {
      label: 'Estudiante 1',
      value: 'Estudiante 1',
    },
    {
      label: 'Estudiante 2',
      value: 'Estudiante 2',
    },
    {
      label: 'Estudiante 3',
      value: 'Estudiante 3',
    },
  ];

  const placeholder = {
    label: 'Elige un estudiante...',
    value: null,
    color: 'black',
  };

  const onPressGameButton = gameNumber => {
    switch (gameNumber) {
      case 1:
        props.navigation.navigate('GameOne');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Evaluar estudiante</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Seleccionar estudiante</Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={students}
            onValueChange={value => {
              setSelectedStudent(value);
            }}
            style={pickerSelectStyles}
            value={selectedStudent}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Seleccionar juego</Text>
          <Button
            onPress={() => onPressGameButton(1)}
            text="Go/nogo"
            backgroundColor={LIGHT_PURPLE_COLOR}
            fontColor={WHITE_COLOR}
            marginBottom={11}
          />
          <Button
            onPress={() => onPressGameButton(2)}
            text="La forma ambivalente"
            backgroundColor={LIGHT_PURPLE_COLOR}
            fontColor={WHITE_COLOR}
          />
        </View>
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
    backgroundColor: PURPLE_COLOR,
  },
  subContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 400,
    backgroundColor: 'white',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default GamesMenuScreen;
