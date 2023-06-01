import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

// Importing the splash screen.
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Text>The app</Text>
    </View>
  );
};

export default App;
