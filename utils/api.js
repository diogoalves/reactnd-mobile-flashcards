import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'reactnd-mobile-flashcards';

export const decks = {
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

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
          .then( result => result ? JSON.parse(result) : decks);
} 

export const getDeck = id => {
  return AsyncStorage.getItem(STORAGE_KEY)
          .then( result => JSON.parse(results)[id] );
}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: { title: title }
  }))  
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: { questions: [ {card} ] }
  }))  
}
