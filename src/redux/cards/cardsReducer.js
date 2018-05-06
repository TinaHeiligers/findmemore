import cardsActions from 'redux/cards/cardsActions';
const { GET_CARDS_SUCCESS, GET_CARDS_ERROR, CHOOSE_CARD } = cardsActions;

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
      };
    case GET_CARDS_ERROR:
      return {
        ...currentState,
        error: action.error,
      };
    case CHOOSE_CARD: {
      const allCards = currentState.all;
      const updatedCard = {
        ...allCards[action.index],
        selected: true,
        status: 'visible'
      };
      return {
        ...currentState,
        all: allCards.map((card, index) => index === action.index ? updatedCard : card),
      };
    }
    default:
      return currentState;
  }
}
