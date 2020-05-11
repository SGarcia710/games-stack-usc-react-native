import React from 'react';

import {StyleSheet, View} from 'react-native';

import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import NavigationHeader from '../../components/NavigationHeader';
import Button from '../../components/Button';

import {
  PURPLE_COLOR,
  LIGHT_YELLOW_COLOR,
  BROWN_COLOR,
} from '../../assets/styles';

import {createStudentController} from '../../controllers/studentsController';

const RegisterStudentScreen = props => {
  const [names, onChangeNames] = React.useState('');
  const [lastNames, onChangeLastNames] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  const [date, onChangeDate] = React.useState('');

  const onPressButton = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    createStudentController(names, lastNames, code, date);
    props.navigation.navigate('Menu');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <NavigationHeader
          title="Registro de estudiante"
          navigation={props.navigation}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.formColumn}>
          <Input
            labelText="Nombres"
            textContentType="emailAddress"
            autoCompleteType="email"
            keyboardType="email-address"
            onChange={onChangeNames}
            value={names}
            placeholder="Primer y/o segundo nombre"
          />
          <DateInput
            labelText="Fecha de nacimiento"
            placeholder="Seleccionar fecha"
            date={date}
            onDateChange={onChangeDate}
          />
          <Input
            labelText="Institución"
            textContentType="password"
            autoCompleteType="password"
            keyboardType="email-address"
            onChange={onChangeLastNames}
            value={lastNames}
            placeholder="Ingresar Institución"
          />
        </View>
        <View style={styles.formColumn}>
          <Input
            labelText="Apellidos"
            textContentType="password"
            autoCompleteType="password"
            keyboardType="email-address"
            onChange={onChangeLastNames}
            value={lastNames}
            placeholder="Primer y segundo apellido"
          />
          <Input
            labelText="País"
            textContentType="password"
            autoCompleteType="password"
            keyboardType="email-address"
            onChange={onChangeLastNames}
            value={lastNames}
            placeholder="Seleccionar País"
          />
          <Input
            labelText="Código estudiante"
            textContentType="password"
            autoCompleteType="password"
            keyboardType="email-address"
            onChange={onChangeCode}
            value={code}
            placeholder="Ingresar código"
          />
        </View>
      </View>

      <Button
        onPress={onPressButton}
        text="Registrar estudiante"
        icon="arrow-right"
        iconPosition="right"
        backgroundColor={LIGHT_YELLOW_COLOR}
        fontColor={BROWN_COLOR}
        marginForText={65}
      />
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
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
  },
  form: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 71,
  },
  formColumn: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default RegisterStudentScreen;
