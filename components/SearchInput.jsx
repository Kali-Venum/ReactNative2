import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function SearchInput({placeholder}) {
  return <TextInput style={styles.searchInput} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginLeft: 20,
    width: '65%',
  },
});
