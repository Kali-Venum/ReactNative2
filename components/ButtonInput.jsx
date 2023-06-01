import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ButtonInput({buttonTitle, buttonHandler, ...rest}) {
  return (
    <TouchableOpacity
      onPress={buttonHandler}
      style={styles.buttonContainer}
      {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#0B223E',
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
