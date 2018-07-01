import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { white, blue } from '../utils/colors';
import { addCard } from '../redux/actions';

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
    const card = { ...this.state };
    const deckId = this.props.navigation.getParam('deckId');
    this.props.dispatch(addCard(deckId, card));
    this.props.navigation.goBack();
  }



  render() {
    const title = this.props.navigation.getParam('title');
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput style={styles.input}
          placeholder="Question"
          onChangeText={this.handleChange('question')}
          value={question}
          maxLength={40}
        />
        <TextInput style={styles.input}
          placeholder="Answer"
          onChangeText={this.handleChange('answer')}
          value={answer}
          maxLength={40}
        />
        <TouchableOpacity onPress={this.onSubmit} style={styles.addCardButton} disabled={question.length === 0 || answer === 0}>
          <Text style={styles.addCardButtonText}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    fontSize: 14,
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 1,
    padding: 14,
    borderRadius: 7
  },
  addCardButton: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40
  },
  addCardButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default connect()(NewCard);
