import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import ListDeckItem from './ListDeckItem';
import Api from '../utils/api';
import { fetchDecksSuccessful } from '../redux/actions';
import { AppLoading } from 'expo';
import { white } from '../utils/colors';

class ListDecks extends Component {
  state = {
    isReady: false,
  };

  componentDidMount = () => {
    Api.getDecks().then(r => {
      this.props.dispatch(fetchDecksSuccessful(r));
      this.setState({ isReady: true });
    });
  };

  render() {
    const { decks } = this.props;
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Object.keys(decks).map(d => (
          <ListDeckItem
            key={decks[d].title}
            title={decks[d].title}
            cardsQuantity={decks[d].questions.length}
            onClick={() =>
              this.props.navigation.navigate('DeckDetail', {
                deckId: decks[d].title,
              })
            }
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 5,
    backgroundColor: white,
  },
});

const mapStateToProps = decks => ({
  decks,
});

export default connect(mapStateToProps)(ListDecks);
