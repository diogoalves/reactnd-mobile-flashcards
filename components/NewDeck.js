import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { addDeck } from '../redux/actions';

class NewDeck extends Component {

  state = {
    newDeckTitle: ''
  }

  handleChange = (newDeckTitle) => {
    this.setState({newDeckTitle});
  }

  onSubmit = () => {
    this.props.dispatch(addDeck(this.state.newDeckTitle));
    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder="Deck Title"
          onChangeText={this.handleChange}
          value={this.state.newDeckTitle}
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

export default connect()(NewDeck);
