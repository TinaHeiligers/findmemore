import reducer, { initialState } from 'redux/cards/cardsReducer';
import cardsActions from 'redux/cards/cardsActions';
import Immutable from 'immutable';

describe('cards reducer -> get cards', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  let testAllCards;
  let testSelectedCards;
  let testDefaultState;
  let testAction;
  let testState;
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
    testDefaultState = defaultState.setIn(['all', 0], newCard);
    let testAction = cardsActions.chooseCard(0);
    const newState = reducer(testDefaultState, testAction);
    const actualNewCardEntries = newState.getIn(['all', 0]);
    // alternate syntax:
    const expectedCardEntries = Immutable.Map({ name: 'testName', image: 'testImage', status: 'visible', matched: false, selected: true })
    expect(actualNewCardEntries).toEqual(expectedCardEntries);
    // alternate syntax:
    expect(newState.get('all').toJS()).toEqual([{ name: 'testName', image: 'testImage', matched: false, selected: true, status: 'visible' }]);
    expect(newState.get('selectedCards').toJS()).toEqual([{ name: 'testName', image: 'testImage', matched: false, selected: true, status: 'visible' }]);
    expect(newState.get('error')).toBeNull();
  });
  it('does not select an already selected card on CHOOSE_CARD', () => {
    testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: false },
      ];
    testSelectedCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
    ];
    testDefaultState = defaultState
      .set('all', Immutable.List(testAllCards.map(card => Immutable.Map(card))))
      .set('selectedCards', Immutable.List(testSelectedCards.map(card => Immutable.Map(card))));
    testAction = cardsActions.chooseCard(0);
    testState = reducer(testDefaultState, testAction);
    expect(testState.get('all').toJS()).toEqual(testAllCards);
    expect(testState.get('selectedCards').toJS()).toEqual(testSelectedCards);
  });
  it('does not select an already matched card on CHOOSE_CARD', () => {
    testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: true, selected: false },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: true, selected: false },
      ];
    testDefaultState = defaultState
      .set('all', Immutable.List(testAllCards.map(card => Immutable.Map(card))));
    testAction = cardsActions.chooseCard(0);
    testState = reducer(testDefaultState, testAction);
    expect(testState.get('all').toJS()).toEqual(testAllCards);
    expect(testState.get('selectedCards').size).toEqual(0);
  });
  it('updates state on MATCH_CARDS', () => {
    testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      ];
    testSelectedCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: false, selected: true },
    ];
    testDefaultState = defaultState
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
  });
  it('updates state on RESET_MATCHED_CARDS', () => {
    const testState = defaultState.set('totalMatchedCards', 4);
    let testAction = cardsActions.resetMatchedCardsCount();
    const newState = reducer(testState, testAction);
    expect(newState.get('totalMatchedCards')).toEqual(0);
  });
  it('updates state on COUNT_MATCHED_CARDS', () => {
    const testAllCards = [
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: true, selected: true },
      { name: 'testName1', image: 'testImage1', status: 'visible', matched: true, selected: true },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      { name: 'testName2', image: 'testImage2', status: 'hidden', matched: false, selected: false },
      ];
    const testState = defaultState
    .set('all', Immutable.List(testAllCards.map(card => Immutable.Map(card))))
    let testAction = cardsActions.countMatchedCards();
    const newState = reducer(testState, testAction);
    expect(newState.get('totalMatchedCards')).toEqual(2);
  });
});
