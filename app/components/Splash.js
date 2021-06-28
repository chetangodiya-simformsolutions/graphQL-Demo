import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/SplashStyles';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';
import { Navigations } from '../constants';

const Splash = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem('@token').then((res) => {
      if (res !== null) {
        const userData = JSON.parse(res);

        const { user } = userData;
        reactotron.log(user, ' res');

        navigation.replace(Navigations.Home, {
          screen: Navigations.Home,
          params: { user: user },
        });
      } else {
        // navigation.replace(Navigations.Login);
        navigation.replace(Navigations.Home, {
          screen: Navigations.Home,
        });
      }
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

Splash.propTypes = {};

export default Splash;
