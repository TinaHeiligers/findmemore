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
  it("changes a card's props on chooseCard", () => {
    const testCard = { name: 'testCard', index: 1 };
    const testChooseCard = cardsActions.chooseCard(testCard, testCard.index);
    expect(testChooseCard).toEqual({
      type: cardsActions.CHOOSE_CARD,
      card: testCard,
      index: testCard.index,
    });
  });
});
