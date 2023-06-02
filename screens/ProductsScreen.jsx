import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimentions';

// Image.
import SignOut from '../assets/signOut.svg';
import Sort from '../assets/short.svg';
import Filter from '../assets/filter.svg';

// Components.
import InputField from '../components/InputField';
import SearchInput from '../components/SearchInput';
import Product from '../components/Product';

export default function ProductsScreen({navigation}) {
  const dataArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // const dataArr = [1];

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
        <TouchableOpacity>
          <Sort height={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Click.')}>
          <Filter height={50} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.productsList}
        data={dataArr}
        renderItem={Product}
        numColumns={2}
      />
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
    marginLeft: '60%',
  },
  subText: {
    color: '#000000',
    paddingLeft: 20,
  },
  searchSortAndFilterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  productsList: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
