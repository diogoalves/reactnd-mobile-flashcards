import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import ListDeckItem from './ListDeckItem';

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Newdeck1: {title: 'Newdeck1', questions: []},
  Newdeck2: {title: 'Newdeck2', questions: []},
  Newdeck3: {title: 'Newdeck3', questions: []},
  Newdeck4: {title: 'Newdeck4', questions: []},
  Newdeck5: {title: 'Newdeck5', questions: []},
  Newdeck6: {title: 'Newdeck6', questions: []},
  Newdeck7: {title: 'Newdeck7', questions: []},
  Newdeck8: {title: 'Newdeck8', questions: []},
};

class ListDecks extends Component {
  
  render () {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {decks && Object.keys(decks).map( d => <ListDeckItem key={decks[d].title} title={decks[d].title} cardsQuantity={decks[d].questions.length} onClick={() => this.props.navigation.navigate('DeckDetail', { deckId: decks[d].title })} />)}
      </ScrollView>
    );
  }
} 

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});

export default ListDecks;
