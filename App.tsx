import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Importing the splash screen.
import SplashScreen from 'react-native-splash-screen';

// All routes.
import Routes from './navigations/Routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
