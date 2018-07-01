import React, { Component } from 'react';
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native';
import { white, red, black } from '../utils/colors';

class QuizQuestion extends Component {

  render() {
    const { show, text, showAnswer } = this.props;
    
    if(!show) return null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.subtitle}>Question</Text>
        <View style={{padding: 40}} />
        <TouchableOpacity onPress={showAnswer} style={styles.showAnswerButton}>
          <Text style={styles.showAnswerButtonText}>Show Answer</Text>
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
  showAnswerButton: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40
  },
  showAnswerButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default QuizQuestion;
