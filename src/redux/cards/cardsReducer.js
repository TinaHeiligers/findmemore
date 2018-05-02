import cardsActions from 'redux/cards/cardsActions';
const { GET_CARDS_SUCCESS, GET_CARDS_ERROR } = cardsActions;

export const initialState = {
  all: [],
  error: null,
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
        error: 'bob',
      }
    default:
      return currentState;
  };
};
