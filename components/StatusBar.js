import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { purple } from '../utils/colors';

const MyStatusBar = () => (
  <View style={styles.container}>
    <StatusBar translucent backgroundColor={purple} barStyle="light-content" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: purple,
    height: Constants.statusBarHeight
  }
})

export default MyStatusBar;

 