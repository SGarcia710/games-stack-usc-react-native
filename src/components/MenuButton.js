import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

export const MenuButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
};
