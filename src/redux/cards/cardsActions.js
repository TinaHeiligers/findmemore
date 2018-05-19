export const cardsActions = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_ERROR: 'GET_CARDS_ERROR',
  CHOOSE_CARD: 'CHOOSE_CARD',
  RESET_CHOSEN_CARDS: 'RESET_CHOSEN_CARDS',
  EXTRACT_CHOSEN_CARDS: 'EXTRACT_CHOSEN_CARDS',
  MATCH_CARDS: 'MATCH_CARDS',
  MATCH_CARDS_REQUEST: 'MATCH_CARDS_REQUEST',
  MATCH_CARDS_ERROR: 'MATCH_CARDS_ERROR',
  getCardsRequest: level => ({ type: cardsActions.GET_CARDS_REQUEST, level: level }),
  getCardsSuccess: cards => ({ type: cardsActions.GET_CARDS_SUCCESS, cards: cards }),
  getCardsError: error => ({ type: cardsActions.GET_CARDS_ERROR, error: error.message }),
  chooseCard: index => ({ type: cardsActions.CHOOSE_CARD, index: index }),
  resetChosenCards: () => ({ type: cardsActions.RESET_CHOSEN_CARDS }),
  extractChosenCards: () => ({ type: cardsActions.EXTRACT_CHOSEN_CARDS }),
  matchCards: () => ({ type: cardsActions.MATCH_CARDS }),
  matchCardsRequest: () => ({ type: cardsActions.MATCH_CARDS_REQUEST }),
  matchCardsError: error => ({ type: cardsActions.MATCH_CARDS_ERROR, error: error.message })
};

export default cardsActions;
