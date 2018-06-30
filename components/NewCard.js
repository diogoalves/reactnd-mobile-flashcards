import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class NewCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = {
    title: 'Add Card',
  }
  
  handleChange = field => value => {
    this.setState({[field]: value});
  }

  onSubmit = () => {
    console.log(this.state.question) 
  }



  render() {
    return (
      <View styles={styles.container}>
        <TextInput style={styles.input}
          placeholder="Question"
          onChangeText={this.handleChange('question')}
          value={this.state.question}
          onSubmitEditing={this.onSubmit}
        />
        <TextInput style={styles.input}
          placeholder="Answer"
          onChangeText={this.handleChange('answer')}
          value={this.state.question}
          onSubmitEditing={this.onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  input: {
    height: 40
  }
})

export default NewCard;
