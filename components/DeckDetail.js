import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white, black, gray } from '../utils/colors';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deckId', 'Detail'),
    };
  };
  render () {
    const { title, cardsQuantity, goAddCard, goQuiz } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{`${cardsQuantity} cards`}</Text>
        <View style={{padding: 40}} />
        <TouchableOpacity onPress={goAddCard} style={styles.addCardButton}>
          <Text style={styles.addCardButtonText}>Create a New Question</Text>
        </TouchableOpacity>
        <View style={{padding: 10}} />
        <TouchableOpacity onPress={goQuiz} style={styles.quizButton}>
          <Text style={styles.quizButtonText}>Start a Quiz</Text>
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
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  subtitle: {
    textAlign: 'center',
    color: gray,
  },
  addCardButton: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1
  },
  addCardButtonText: {
    color: gray,
    fontSize: 17,
    textAlign: 'center',
  },
  quizButton: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 200,
    marginLeft: 40,
    marginRight: 40
  },
  quizButtonText: {
    color: white,
    fontSize: 17,
    textAlign: 'center',
  }
});

const mapStateToProps = (decks, ownProps) => {
  const deckId = ownProps.navigation.getParam('deckId');
  const deck = decks[deckId];
  const title = deck['title'];
  return ({
    title: title,
    cardsQuantity: deck['questions'].length,
    goAddCard: () => ownProps.navigation.navigate('NewCard', { deckId, title }),
    goQuiz: () => ownProps.navigation.navigate('Quiz', { deckId })
  })
};



export default connect(mapStateToProps)(DeckDetail);