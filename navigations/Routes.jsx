import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens.
import LoginScreen from '../screens/LoginScreen';
import ProductsScreen from '../screens/ProductsScreen';
import FilterScreen from '../screens/FilterScreen';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
}
