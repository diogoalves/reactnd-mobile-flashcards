import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBar from './components/StatusBar';
import MainNavigator from './components/MainNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});





