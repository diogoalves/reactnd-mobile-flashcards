import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'reactnd-mobile-flashcards';

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
  }
};

export const getDecks = () => decks;

export const getDeck = id => decks.id;

export const saveDeckTitle = title => 'title';

export const addCardToDeck = (title, card) => 'addCard';

const persistToStorage = () => 'placeholder';

const loadFromStorate = () => 'placeholder';

