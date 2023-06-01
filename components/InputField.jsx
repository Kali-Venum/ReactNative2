import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function InputField({value, placeholder, iconType, ...rest}) {
  return (
    <View styles={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#4B4B4B"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    width: windowWidth - 20,
    borderRadius: 50,
    padding: 10,
    marginVertical: 5,
  },
  iconStyle: {
    width: 50,
  }
});
