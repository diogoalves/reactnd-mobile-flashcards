import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Foundation, Entypo } from '@expo/vector-icons';
import { blue, white } from '../utils/colors';
import MainNavigator from './MainNavigator';
import NewDeck from './NewDeck';

const Tabs = createBottomTabNavigator ({
  Decks: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Foundation name='list' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: 'null'
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: blue,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default Tabs;