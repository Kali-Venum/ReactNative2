import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimentions';

// Image.
import SignOut from '../assets/signOut.svg';
import Sort from '../assets/short.svg';
import Filter from '../assets/filter.svg';

// Components.
import InputField from '../components/InputField';
import SearchInput from '../components/SearchInput';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.productTextAndSignOutButtonContainer}>
        <Text style={styles.headingText}>Products</Text>
        <TouchableOpacity style={styles.signOutLogoWrapper}>
          <SignOut />
        </TouchableOpacity>
      </View>
      <Text style={styles.subText}>Product & Customer Credentials</Text>
      <View style={styles.searchSortAndFilterWrapper}>
        <SearchInput placeholder={'Search'} />
        <Sort />
        <Filter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productTextAndSignOutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0B223E',
    paddingTop: 20,
    paddingLeft: 20,
  },
  signOutLogoWrapper: {
    marginLeft: '50%',
  },
  subText: {
    color: '#000000',
    paddingLeft: 20,
  },
  searchSortAndFilterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
});
