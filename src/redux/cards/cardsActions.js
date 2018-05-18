export const cardsActions = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_ERROR: 'GET_CARDS_ERROR',
  CHOOSE_CARD: 'CHOOSE_CARD',
  RESET_CHOSEN_CARDS: 'RESET_CHOSEN_CARDS',
  CHOSEN_CARDS_CHECK: 'CHOSEN_CARDS_CHECK',
  MATCH_CARDS: 'MATCH_CARDS',
  getCardsRequest: (level) => ({ type: cardsActions.GET_CARDS_REQUEST, level: level }),
  getCardsSuccess: (cards) => ({ type: cardsActions.GET_CARDS_SUCCESS, cards: cards }),
  getCardsError: (error) => ({ type: cardsActions.GET_CARDS_ERROR, error: error.message }),
  chooseCard: (index) => ({ type: cardsActions.CHOOSE_CARD, index: index }),
  resetChosenCards: () => ({ type: cardsActions.RESET_CHOSEN_CARDS }),
  chosenCardsCheck: () => ({ type: cardsActions.CHOSEN_CARDS_CHECK }),
  matchCards: () => ({ type: cardsActions.MATCH_CARDS }),
};

export default cardsActions;
