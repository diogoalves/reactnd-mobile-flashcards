
import React from 'react';
import { createStackNavigator } from 'react-navigation'
import { blue, white } from '../utils/colors';
import Tabs from './Tabs';
import DeckDetail from './DeckDetail';
import NewCard from './NewCard';
import Quiz from './Quiz';

const MainNavigator = createStackNavigator({
  Decks: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  NewCard: {
    screen: NewCard,
  },
  Quiz: {
    screen: Quiz
  }
})

export default MainNavigator;