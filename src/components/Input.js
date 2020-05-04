import React from 'react';

import {TextInput, Text, View, StyleSheet} from 'react-native';
import {
  WHITE_COLOR,
  MULI_BOLD,
  LIGHT_PURPLE_COLOR,
  MULI_REGULAR,
} from '../assets/styles';

const Input = ({
  labelText,
  textContentType,
  autoCompleteType,
  keyboardType,
  onChange,
  value,
  placeholder,
  marginBottom,
}) => {
  return (
    <View
      style={{
        ...styles.inputContainer,
        marginBottom: marginBottom ? marginBottom : 0,
      }}>
      <Text style={styles.inputLabel}>{labelText}</Text>
      <TextInput
        placeholderTextColor={WHITE_COLOR}
        textContentType={textContentType}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType={autoCompleteType}
        keyboardType={keyboardType}
        style={styles.input}
        onChange={text => {
          onChange(text.nativeEvent.text);
        }}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontFamily: MULI_BOLD,
    marginBottom: 11,
  },
  input: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: LIGHT_PURPLE_COLOR,
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    color: WHITE_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 17,
    height: 58,
    width: 350,
  },
});

export default Input;
