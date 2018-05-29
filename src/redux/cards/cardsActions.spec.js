import cardsActions from 'redux/cards/cardsActions.js';
describe('cards action creators -> cardsActions', () => {
  it('gets cards on getCardsRequest', () => {
    const testLevel = 'easy';
    const testGetCardsRequest = cardsActions.getCardsRequest(testLevel);
    expect(testGetCardsRequest).toEqual({
      type: cardsActions.GET_CARDS_REQUEST,
      level: testLevel,
    });
  });
  it('gets cards on getCardsSuccess', () => {
    const testCards = [];
    const testGetCardsSuccess = cardsActions.getCardsSuccess(testCards);
    expect(testGetCardsSuccess).toEqual({
      type: cardsActions.GET_CARDS_SUCCESS,
      cards: testCards,
    });
  });
  it('shows an error message on getCardsError', () => {
    const testError = { message: 'Test Error Message' };
    const testGetCardsError = cardsActions.getCardsError(testError);
    expect(testGetCardsError).toEqual({
      type: cardsActions.GET_CARDS_ERROR,
      error: testError.message,
    });
  });
  it('chooses a card on chooseCardRequest', () => {
    const testCardIndex = 1;
    const testChooseCardRequest = cardsActions.chooseCardRequest(testCardIndex);
    expect(testChooseCardRequest).toEqual({
      type: cardsActions.CHOOSE_CARD_REQUEST,
      index: 1,
    });
  });
  it('changes a card\'s props on chooseCard', () => {
    const testChooseCard = cardsActions.chooseCard(1);
    expect(testChooseCard).toEqual({
      type: cardsActions.CHOOSE_CARD,
      index: 1,
    });
  });
  it('resets all unmatched selected cards to hidden and unselected', () => {
    const testResetChosenCards = cardsActions.resetChosenCards();
    expect(testResetChosenCards).toEqual({
      type: cardsActions.RESET_CHOSEN_CARDS,
    });
  });
  it('issues a matchCardsRequest', () => {
    const testMatchCardsRequest = cardsActions.matchCardsRequest();
    expect(testMatchCardsRequest).toEqual({ type: cardsActions.MATCH_CARDS_REQUEST });
  });
  it('issues a matchCardsError', () => {
    const testError = { message: 'Test Error Message' };
    const testMatchCardsError = cardsActions.matchCardsError(testError);
    expect(testMatchCardsError).toEqual({ type: cardsActions.MATCH_CARDS_ERROR, error: testError.message });
  });
  it('matches selected cards', () => {
    const testMatchCards = cardsActions.matchCards();
    expect(testMatchCards).toEqual({
      type: cardsActions.MATCH_CARDS,
    });
  });
  it('counts the number of matched cards', () => {
    const testCountMatchedCards = cardsActions.countMatchedCards();
    expect(testCountMatchedCards).toEqual({
      type: cardsActions.COUNT_MATCHED_CARDS,
    });
  });
});
