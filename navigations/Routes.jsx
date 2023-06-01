import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens.
import LoginScreen from '../screens/LoginScreen';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
