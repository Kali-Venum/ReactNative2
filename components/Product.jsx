import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Product() {
  return (
    <TouchableOpacity
      onPress={() => console.log('Clicked on a product.')}
      style={styles.productWrapper}>
      <Image source={require('../assets/feketecipo.png')} />
      <Text style={styles.aboutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        placeat!
      </Text>
      <Text style={styles.priceText}>$100</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productWrapper: {
    width: '50%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // borderWidth: 1
  },
  aboutText: {
    color: '#9CA0AF',
    fontSize: 15,
  },
  priceText: {
    color: '#000000',
    fontWeight: 'bold',
    marginRight: '60%',
    marginTop: 5,
  },
});
