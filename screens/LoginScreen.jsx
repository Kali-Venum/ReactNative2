import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

// Image.
import EG from '../assets/EG.svg';

// components.
import InputField from '../components/InputField';
import ButtonInput from '../components/ButtonInput';

export default function LoginScreen({navigation}) {
  loginHandler = () => {
    navigation.navigate('ProductsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <EG style={styles.logo} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.bigText}>Welcome back!</Text>
        <Text style={styles.smallText}>Enter your credential to continue</Text>
      </View>
      <View style={styles.inputWrapper}>
        <InputField placeholder={'Email or Username'} iconType={'user'} />
        <InputField
          placeholder={'Password'}
          iconType={'user'}
          secureTextEntry={true}
        />
        <ButtonInput buttonHandler={loginHandler} buttonTitle={'Log in'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWrapper: {},
  logo: {
    height: 50,
    width: 50,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  bigText: {
    color: '#0B223E',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 5,
  },
  smallText: {
    color: '#4B4B4B',
    marginBottom: 15,
  },
  inputWrapper: {
    justifyContent: 'space-between',
  },
});
