import cardsActions from 'redux/cards/cardsActions';
const { GET_CARDS_SUCCESS, GET_CARDS_ERROR } = cardsActions;

export const initialState = {
  all: [],
  error: null,
  selected: null,
};
export default function cardsReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case GET_CARDS_SUCCESS:
    return {
      ...currentState,
      all: action.cards,
    }
    case GET_CARDS_ERROR:
      return {
        ...currentState,
        error: action.error,
      }
    default:
      return currentState;
  };
};
// cards have:
// status
// selected
// matched
// on them, we should probably add that in within redux.
// // we need a selected array on cards too
