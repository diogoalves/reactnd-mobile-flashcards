import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import ListDeckItem from './ListDeckItem';
import { getDecks } from '../utils/api';
import { fetchDecksSuccessful } from '../redux/actions';

class ListDecks extends Component {
  
  componentDidMount = () => {
    getDecks().then(r => this.props.dispatch(fetchDecksSuccessful(r)));
  }

  render () {
    const { decks } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Object.keys(decks).map( d => <ListDeckItem key={decks[d].title} title={decks[d].title} cardsQuantity={decks[d].questions.length} onClick={() => this.props.navigation.navigate('DeckDetail', { deckId: decks[d].title })} />)}
      </ScrollView>
    );
  }
} 

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 5
  }
});

const mapStateToProps = decks => ({
  decks
})

export default connect(mapStateToProps)(ListDecks);
