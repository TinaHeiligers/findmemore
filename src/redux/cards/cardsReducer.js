import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';

export const initialState = Immutable.Map({
  all: Immutable.List(),
  error: null,
  selectedCards: Immutable.List(),
  totalMatchedCards: 0,
  hasMatch: false
});
export default function cardsReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case cardsActions.GET_CARDS_SUCCESS:
      return currentState.set('all', Immutable.List(action.cards.map(card => Immutable.Map(card))));
    case cardsActions.GET_CARDS_ERROR:
      return currentState.set('error', action.error);
    case cardsActions.CHOOSE_CARD: {
      const selectedCard = Immutable.Map(currentState.getIn(['all', action.index]));
      const newCard = selectedCard.merge({
        status: 'visible',
        selected: true,
      });
      const updatedState = currentState.mergeIn(['all', action.index], newCard)
        .mergeIn(['selectedCards', currentState.get('selectedCards').size], newCard);
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
    default:
      return currentState;
  }
}

