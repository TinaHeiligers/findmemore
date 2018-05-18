import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';

export const initialState = Immutable.Map({
  all: Immutable.List(),
  error: null,
  selected: null,
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
      const updatedState = currentState.mergeIn(['all', action.index], newCard);
      return updatedState;
    }
    case cardsActions.RESET_CHOSEN_CARDS: {
      return currentState.set('all', currentState.get('all').map((card) => {
        if(card.get('selected') && !card.get('matched')) {
          return card.merge({ selected: false, status: 'hidden' });
        } else {
          return card;
        }
      }));
    }
    case cardsActions.CHOSEN_CARDS_CHECK: {
      // get the cards that are selected (filter)
      // From these two cards, check if their names match
      return currentState.set('selected', currentState.get('all').filter((card) => card.get('selected') && !card.get('matched')));
    }
    case cardsActions.MATCH_CARDS: {
      const cardName1 = currentState.getIn(['selected','0']);
      const cardName2 = currentState.getIn(['selected','1']);
      // /* eslint-disable no-console */
      console.log('cardName1', currentState.getIn(['selected','0']).get('name'));
      console.log('cardName2', currentState.getIn(['selected','1']).get('name'));
      if (currentState.getIn(['selected','0']).get('name') === currentState.getIn(['selected','1']).get('name')) {
        return currentState.set('all', currentState.get('all').map((card) => {
        if (card.get('name') === currentState.getIn(['selected','0']).get('name')) {
          return card.merge({ selected: false, status: 'visible', matched: true });
        } else {
          return card;
        }
      }));
    }
    return currentState;
    }
    default:
      return currentState;
  }
}
