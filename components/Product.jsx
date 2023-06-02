import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Product() {
  return (
    <View style={styles.productWrapper}>
      <Image source={require('../assets/feketecipo.png')} />
      <Text style={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, placeat!</Text>
      <Text style={styles.priceText}>$100</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    productWrapper: {
      width: '50%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    aboutText: {
      color: '#9CA0AF',
      fontSize: 15
    },
    priceText: {
      color: '#000000',
      fontWeight: 'bold'
    }
})