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
      return currentState.mergeIn(['all', action.index], { selected: true, status: 'visible' });
    default:
      return currentState;
  }
}
