import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import { white, red, green } from '../utils/colors';

class QuizAnswer extends Component {
  render() {
    const { show, text, correct, incorrect } = this.props;

    if (!show) return null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.subtitle}>Answer</Text>
        <View style={{ padding: 40 }} />
        <TouchableOpacity onPress={correct} style={styles.correctButton}>
          <Text style={styles.correctButtonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={incorrect} style={styles.incorrectButton}>
          <Text style={styles.incorrectButtonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  subtitle: {
    textAlign: 'center',
    color: red,
    fontSize: 17,
  },
  correctButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40,
  },
  correctButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  incorrectButton: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40,
  },
  incorrectButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default QuizAnswer;
