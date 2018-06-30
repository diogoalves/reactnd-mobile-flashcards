export const FETCH_DECKS_SUCCESSFUL = 'FETCH_DECKS_SUCCESSFUL';
export const DECK_ADD = 'DECK_ADD';
export const CARD_ADD = 'CARD_ADD';

export const fetchDecksSuccessful = (decks) => ({ 
  type: FETCH_DECKS_SUCCESSFUL,
  decks
});

export const addDeck = (deckName) => ({ 
  type: DECK_ADD,
  deckName 
});

export const addCard = (deckName, card) => ({ 
  type: DECK_ADD,
  deckName,
  card
});

