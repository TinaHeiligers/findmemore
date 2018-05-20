import reducer, { initialState } from 'redux/cards/cardsReducer';
import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';

describe('cards reducer -> get cards', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining([
      'all',
      'error',
      'selectedCards',
    ]));
  });
  it('updates state on GET_CARDS_SUCCESS', () => {
    const testLevel = 'easy';
    const testCards = [];
    let testAction = cardsActions.getCardsRequest(testLevel);
    const newState = reducer(defaultState, testAction);
    expect(newState.get('all').toJS()).toEqual(testCards);
    expect(newState.get('error')).toBeNull();
  });
  it('updates state on GET_CARDS_ERROR', () => {
    const testError = new Error('Test Error');
    let testAction = cardsActions.getCardsError(testError);
    const newState = reducer(defaultState, testAction);
    expect(newState.get('error')).toEqual('Test Error');
  });
  it('updates state on CHOOSE_CARD', () => {
    const newCard = Immutable.Map({ name: 'testName', image: 'testImage', status: 'hidden', matched: false, selected: false });
    const testDefaultState = defaultState.setIn(['all', 0], newCard);
    let testAction = cardsActions.chooseCard(0);
    const newState = reducer(testDefaultState, testAction);
    const actualNewCardEntries = newState.getIn(['all', 0]);
    // alternate syntax:
    const expectedCardEntries = Immutable.Map({ name: 'testName', image: 'testImage', status: 'visible', matched: false, selected: true })
    expect(actualNewCardEntries).toEqual(expectedCardEntries)
    // alternate syntax:
    expect(newState.get('all').toJS()).toEqual([{ name: 'testName', image: 'testImage', matched: false, selected: true, status: 'visible' }]);
    expect(newState.get('selectedCards').toJS()).toEqual([{ name: 'testName', image: 'testImage', matched: false, selected: true, status: 'visible' }]);
    expect(newState.get('error')).toBeNull();
  });
  it('updates state on MATCH_CARDS', () => {
    const testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      ];
    const testSelectedCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
    ];
    const testDefaultState = defaultState
    .set('all', Immutable.List(testAllCards.map(card => Immutable.Map(card))))
    .set('selectedCards', Immutable.List(testSelectedCards.map(card => Immutable.Map(card))));
    const testAction = cardsActions.matchCards();
    const newState = reducer(testDefaultState, testAction);
    const actualAllCards = newState.get('all');
    expect(actualAllCards.toJS().filter(card => card.matched === true)).toHaveLength(2);
  });
  it('updates state on RESET_CHOSEN_CARDS', () => {
    const testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      ];
    const testSelectedCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
    ];
    const testDefaultState = defaultState
    .set('all', Immutable.List(testAllCards.map(card => Immutable.Map(card))))
    .set('selectedCards', Immutable.List(testSelectedCards.map(card => Immutable.Map(card))));
    const testAction = cardsActions.resetChosenCards();
    const newState = reducer(testDefaultState, testAction);
    const actualselectedCards = newState.get('selectedCards');
    expect(actualselectedCards.toJS()).toEqual([]);
  })
});
