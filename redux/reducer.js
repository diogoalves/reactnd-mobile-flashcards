import { FETCH_DECKS_SUCCESSFUL, DECK_ADD, CARD_ADD } from './actions';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_DECKS_SUCCESSFUL:
      return action.decks;

    case DECK_ADD: 
      return {
        ...state,
        [action.deckName]: { title: action.deckName, questions: [] }
      };

    case CARD_ADD: 
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: [ ...state[action.deckName].questions, action.card ]
        }
      }
    
    default: return state;
  }
}

export default reducer;