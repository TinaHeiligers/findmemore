import reducer, { initialState } from 'redux/cards/cardsReducer';
import cardsActions from 'redux/cards/cardsActions';

describe('cards reducer -> get cards', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining([
      'all',
      'error',
      'selected',
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
    const testDefaultState = defaultState.merge({ all: [{ selected: false, status: 'hidden' }], error: null, selected: null });
    let testAction = cardsActions.chooseCard(0);
    const newState = reducer(testDefaultState, testAction);
    expect(newState.get('all').toJS()).toEqual([{ selected: true, status: 'visible' }]);
    expect(newState.get('error')).toBeNull();
  });
});
