import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';
const { GET_CARDS_SUCCESS, GET_CARDS_ERROR, CHOOSE_CARD } = cardsActions;

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
      return currentState.set('all', Immutable.List(action.cards));
    case GET_CARDS_ERROR:
      return currentState.set('error', action.error);
    case CHOOSE_CARD:
      const selectedCard = currentState.getIn(['all', action.index]);
      const newCard = {
        name: selectedCard.name,
        image: selectedCard.image,
        status: 'visible',
        matched: selectedCard.matched,
        selected: true,
     };
      const updatedState = currentState.mergeIn(['all', action.index], { ...newCard });
      return updatedState;
    default:
      return currentState;
  }
}
