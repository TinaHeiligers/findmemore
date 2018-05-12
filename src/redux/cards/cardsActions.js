export const cardsActions = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_ERROR: 'GET_CARDS_ERROR',
  CHOOSE_CARD: 'CHOOSE_CARD',
  getCardsRequest: (level) => ({ type: cardsActions.GET_CARDS_REQUEST, level: level }),
  getCardsSuccess: (cards) => ({ type: cardsActions.GET_CARDS_SUCCESS, cards: cards }),
  getCardsError: (error) => ({ type: cardsActions.GET_CARDS_ERROR, error: error.message }),
  chooseCard: (index) => ({ type: cardsActions.CHOOSE_CARD, index: index }),
};

export default cardsActions;
