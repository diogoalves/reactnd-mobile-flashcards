import React, { Component } from 'react';
import { connect } from 'react-redux';
import { white } from '../utils/colors';
import Reminder from '../utils/reminder';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizSummary from './QuizSummary';

import { Text, View, StyleSheet } from 'react-native';

class Quiz extends Component {
  state = {
    current: 1,
    showingQuestion: true,
    showingAnswer: false,
    showingSummary: false,
    points: 0,
  };

  static navigationOptions = {
    title: 'Quiz',
  };

  showAnswer = () => {
    this.setState({
      showingQuestion: false,
      showingAnswer: true,
    });
  };

  cardResult = point => () => {
    const { length } = this.props;
    const { current } = this.state;
    const hasMoreCards = current < length;

    if (hasMoreCards) {
      this.setState(currentState => ({
        current: currentState.current + 1,
        showingQuestion: true,
        showingAnswer: false,
        points: currentState.points + point,
      }));
    } else {
      Reminder.clearAndSet();
      this.setState(currentState => ({
        showingAnswer: false,
        showingSummary: true,
        points: currentState.points + point,
      }));
    }
  };

  restartQuiz = () => {
    this.setState({
      current: 1,
      showingQuestion: true,
      showingAnswer: false,
      showingSummary: false,
      points: 0,
    });
  };

  render() {
    const {
      current,
      showingQuestion,
      showingAnswer,
      showingSummary,
      points,
    } = this.state;
    const { questions, length } = this.props;
    question = questions[current - 1].question;
    answer = questions[current - 1].answer;
    return (
      <View style={styles.container}>
        <Text>{`${current} / ${length}`}</Text>
        <QuizQuestion
          show={showingQuestion}
          text={question}
          showAnswer={this.showAnswer}
        />
        <QuizAnswer
          show={showingAnswer}
          text={answer}
          correct={this.cardResult(1)}
          incorrect={this.cardResult(0)}
        />
        <QuizSummary
          show={showingSummary}
          text={`You answered correctly ${points} of ${length} cards`}
          restart={this.restartQuiz}
          goBack={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

const mapStateToProps = (decks, ownProps) => {
  const deckId = ownProps.navigation.getParam('deckId');
  const deck = decks[deckId];
  return {
    deck: deck,
    questions: deck.questions,
    length: deck.questions.length,
  };
};

export default connect(mapStateToProps)(Quiz);
