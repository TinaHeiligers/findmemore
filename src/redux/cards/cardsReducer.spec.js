import reducer, { initialState } from 'redux/cards/cardsReducer';
import cardsActions from 'redux/cards/cardsActions';

describe('cards reducer -> get cards', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(Object.keys(defaultState)).toEqual(expect.arrayContaining([
      'all',
      'error',
    ]));
  });
  it('updates state on GET_CARDS_SUCCESS', () => {
    const testLevel = 'easy';
    const testCards = []
    let testAction = cardsActions.getCardsRequest(testLevel);
    const newState = reducer(defaultState, testAction);
    const expectedState = {
      ...defaultState,
      all: testCards,
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });
  it('updates state on GET_CARDS_ERROR', () => {
    const testError = new Error('error');
    let testAction = cardsActions.getCardsError(testError);
    const newState = reducer(defaultState, testAction);
    const expectedState = {
      ...defaultState,
      error: 'error',
    };
    expect(newState).toEqual(expectedState);
  });
  it('updates state on CHOOSE_CARD', () => {
    const testCard = { selected: false, status: 'hidden' };
    const testIndex = 0;
    const testDefaultState = { all: [testCard], error: null, selected: null };
    let testAction = cardsActions.chooseCard(testCard, testIndex);
    const newState = reducer(testDefaultState, testAction);
    const expectedState = {
      ...testDefaultState,
      all: [{ selected: true, status: 'visible' }],
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });
});
