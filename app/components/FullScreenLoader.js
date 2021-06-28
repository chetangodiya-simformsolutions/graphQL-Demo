import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/FullScreenLoaderStyles';
import { Colors } from '../theme';

const FullScreenLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator color={Colors.primary} />
  </View>
);
FullScreenLoader.propTypes = {};

export default FullScreenLoader;
