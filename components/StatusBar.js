import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { blue } from '../utils/colors';

const MyStatusBar = () => (
  <View style={styles.container}>
    <StatusBar translucent backgroundColor={blue} barStyle="light-content" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue,
    height: Constants.statusBarHeight
  }
})

export default MyStatusBar;

 