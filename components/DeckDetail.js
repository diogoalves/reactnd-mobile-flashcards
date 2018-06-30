import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white, gray } from '../utils/colors';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deckId', 'Detail'),
    };
  };
  render () {
    const { title, cardsQuantity } = this.props;
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{`${cardsQuantity} cards`}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard', { entryId: 1 })}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', { entryId: 1 })}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>        
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 30,
    backgroundColor: white,
    borderBottomColor: gray,
    borderBottomWidth: 0.5
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
  },
  subtitle: {
    textAlign: 'center',
    color: gray

  }
});

const mapStateToProps = (decks, ownProps) => {
  const deck = decks[ownProps.navigation.getParam('deckId')];
  return ({
    title: deck['title'],
    cardsQuantity: deck['questions'].length
  })
};


export default connect(mapStateToProps)(DeckDetail);