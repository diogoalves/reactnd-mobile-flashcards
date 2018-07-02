import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'reactnd-mobile-flashcards';

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(
    result => (result ? JSON.parse(result) : decks)
  );
};

const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [title]: { title: title, questions: [] },
    })
  );
};

const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    const db = JSON.parse(result);
    if (db[title]) {
      const updatedDeck = {
        title: title,
        questions: db[title].questions.concat(card),
      };
      AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
          [title]: updatedDeck,
        })
      );
    } else {
      AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
          [title]: { title: title, questions: [card] },
        })
      );
    }
  });
};

export default {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
};
