import React from 'react';

import {TextInput, Text, View} from 'react-native';

export const InputContainer = ({
  labelText,
  textContentType,
  autoCompleteType,
  keyboardType,
  onChange,
  value,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{labelText}</Text>
      <TextInput
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
        value={value}
      />
    </View>
  );
};

export const styles = {
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 250,
    backgroundColor: 'white',
    fontSize: 20,
  },
};
