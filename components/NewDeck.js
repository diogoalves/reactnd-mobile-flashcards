import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { addDeck } from '../redux/actions';
import { blue, white } from '../utils/colors';

class NewDeck extends Component {

  state = {
    newDeckTitle: ''
  }

  handleChange = (newDeckTitle) => {
    this.setState({newDeckTitle});
  }

  onSubmit = () => {
    this.props.dispatch(addDeck(this.state.newDeckTitle));
    this.props.navigation.navigate('DeckDetail', { deckId: this.state.newDeckTitle });
  }

  render() {
    const { newDeckTitle } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder="Deck Title"
          onChangeText={this.handleChange}
          value={newDeckTitle}
        />
        <TouchableOpacity onPress={this.onSubmit} style={styles.addDeckButton} disabled={newDeckTitle.length === 0}>
          <Text style={styles.addDeckButtonText}>Create Deck</Text>
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
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 1,
    padding: 14,
    borderRadius: 7  
  },
  addDeckButton: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40
  },
  addDeckButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default connect()(NewDeck);
