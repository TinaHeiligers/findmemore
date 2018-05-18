import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';
const { GET_CARDS_SUCCESS, GET_CARDS_ERROR, CHOOSE_CARD, RESET_CHOSEN_CARDS } = cardsActions;

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
    case GET_CARDS_SUCCESS:
      return currentState.set('all', Immutable.List(action.cards.map(card => Immutable.Map(card))));
    case GET_CARDS_ERROR:
      return currentState.set('error', action.error);
    case CHOOSE_CARD:
      const selectedCard = Immutable.Map(currentState.getIn(['all', action.index]));

      const newCard = selectedCard.merge({
        status: 'visible',
        selected: true,
      });
      const updatedState = currentState.mergeIn(['all', action.index], newCard);
      return updatedState;
    case RESET_CHOSEN_CARDS:
      return currentState.set('all', currentState.get('all').map((card) => {
        if(card.get('selected') && !card.get('matched')) {
          return card.merge({ selected: false, status: 'hidden' });
        } else {
          return card;
        }
      }));
    default:
      return currentState;
  }
}
