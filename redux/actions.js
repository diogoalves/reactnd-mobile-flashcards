import Api from '../utils/api';
export const FETCH_DECKS_SUCCESSFUL = 'FETCH_DECKS_SUCCESSFUL';
export const DECK_ADD = 'DECK_ADD';
export const CARD_ADD = 'CARD_ADD';

export const fetchDecksSuccessful = (decks) => ({ 
  type: FETCH_DECKS_SUCCESSFUL,
  decks
});

export const addDeck = (deckName) => {
  Api.saveDeckTitle(deckName);
  return {
    type: DECK_ADD,
    deckName 
  } 
};

export const addCard = (deckName, card) => { 
  Api.addCardToDeck(deckName, card);
  return {
    type: CARD_ADD,
    deckName,
    card
  }
};

