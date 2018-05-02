export const cardsActions = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_ERROR: 'GET_CARDS_ERROR',
  getCardsRequest: (level) => ({ type: cardsActions.GET_CARDS_REQUEST, level: level }),
  getCardsSuccess: (cards) => ({ type: cardsActions.GET_CARDS_SUCCESS, cards: cards }),
  getCardsError: (error) => ({ type: cardsActions.GET_CARDS_ERROR, error: error.message }),
};

export default cardsActions;
