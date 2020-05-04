import React from 'react';

import DatePicker from 'react-native-datepicker';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  WHITE_COLOR,
  MULI_BOLD,
  LIGHT_PURPLE_COLOR,
  MULI_REGULAR,
} from '../assets/styles';

const DateInput = ({
  labelText,
  onDateChange,
  date,
  placeholder,
  marginBottom,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.inputContainer,
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      <Text style={styles.dateInputLabel}>{labelText}</Text>
      <DatePicker
        style={{width: 350}}
        date={date}
        mode="date"
        placeholder={placeholder}
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: styles.dateInput,
          dateText: styles.dateInputText,
          placeholderText: styles.dateInputText,
        }}
        onDateChange={onDateChange}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateInputLabel: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_BOLD,
    marginBottom: 20,
  },
  dateInput: {
    marginLeft: 0,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: LIGHT_PURPLE_COLOR,
    height: 58,
    paddingHorizontal: 30,
    paddingVertical: 17,
    width: 350,
    alignItems: 'flex-start',
  },
  dateInputText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_REGULAR,
  },
});

export default DateInput;
