import cardsActions from 'redux/cards/cardsActions';

export const initialState = {
  all: [],
  error: null,
  selectedCards: [],
  totalMatchedCards: 0,
  hasMatch: false,
};

export default function cardsReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case cardsActions.GET_CARDS_SUCCESS: {
      const newState = { ...currentState, all: action.cards };
      return newState;
    }
    case cardsActions.GET_CARDS_ERROR: {
      const newState = { ...currentState, error:  action.error };
      return newState;
    }
    case cardsActions.CHOOSE_CARD: {
      const selectedCard = currentState.all[action.index];
      if (selectedCard.selected || selectedCard.matched) {
        return currentState;
      }
      const newCard = { ...selectedCard, status: 'visible', selected: true };
      const indexOfInterest = action.index;
      const selectedCardsLength = currentState.selectedCards.length;
      let newAll = [...currentState.all];
      let newSelectedCards = [...currentState.selectedCards];
      newAll[indexOfInterest] = newCard;
      newSelectedCards[selectedCardsLength] = newCard;
      const updatedState = { 
        ...currentState, 
        all: newAll,
        selectedCard: newSelectedCards,
      };
      return updatedState;
    }
    case cardsActions.RESET_CHOSEN_CARDS: {
      const updatedAllCards = Immutable.List(currentState.get('all').map(card => {
        if(card.get('selected') && !card.get('matched')) {
          return card.merge({ selected: false, status: 'hidden' });
        } else {
          return card;
        }
      }));
      return currentState.merge({ all: updatedAllCards, selectedCards: Immutable.List() });
    }
    case cardsActions.MATCH_CARDS: {
      const name = currentState.getIn(['selectedCards','0','name']);
      if (name === currentState.getIn(['selectedCards','1','name'])) {
        const newState = currentState.set('hasMatch', true);
        return newState.set('all', newState.get('all').map(card => {
          if (card.get('name') === name) {
            return card.merge({ selected: false, status: 'visible', matched: true });
          } else {
            return card;
          }
        }));
      } else {
        return currentState.set('hasMatch', false);
      }
    }
    case cardsActions.MATCH_CARDS_ERROR:
      return currentState.set('error', action.error);
    case cardsActions.COUNT_MATCHED_CARDS: {
      const updatedCount = currentState.get('all').reduce((acc, curr) => {
        if (curr.get('matched') === true) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const updatedState = currentState.set('totalMatchedCards', updatedCount);
      return updatedState;
    }
    case cardsActions.RESET_MATCHED_CARDS_COUNT: {
      return currentState.merge({ totalMatchedCards: 0 });
    }
    default:
      return currentState;
  }
}

