import React, { Component } from 'react';
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native';
import { white, black, gray } from '../utils/colors';

class QuizSummary extends Component {

  render() {
    const { show, text, restart, goBack } = this.props;
    
    if(!show) return null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <View style={{padding: 40}} />
        <TouchableOpacity onPress={restart} style={styles.restartButton}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
          <Text style={styles.goBackButtonText}>Go Back</Text>
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
    backgroundColor: white,
    justifyContent: 'space-around',

  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  restartButton: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40
  },
  restartButtonText: {
    color: white,
    fontSize: 17,
    textAlign: 'center',
  },
  goBackButton: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1
  },
  goBackButtonText: {
    color: gray,
    fontSize: 17,
    textAlign: 'center',
  }  
})

export default QuizSummary;
