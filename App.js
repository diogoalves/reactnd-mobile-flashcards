import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, View } from 'react-native';
import StatusBar from './components/StatusBar';
import Tabs from './components/Tabs';
import reducer from './redux/reducer';
import Reminder from './utils/reminder';
import { white } from './utils/colors'

export default class App extends React.Component {
  
  componentDidMount = () => {
    Reminder.clearAndSet();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <StatusBar />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
});




