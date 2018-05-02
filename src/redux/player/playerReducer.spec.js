import reducer, { initialState } from 'redux/player/playerReducer';
import playerActions from 'redux/player/playerActions';

describe('player reducer -> addPlayer', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(Object.keys(defaultState)).toEqual(expect.arrayContaining([
      "current",
      "all",
    ]));
  });
  it('updates state on ADD_PLAYER', () => {
    const testNewPlayer = 'Name';
    let testAction = playerActions.addPlayer(testNewPlayer);
    const newState = reducer(defaultState, testAction);
    const expectedState = {
      ...defaultState,
      current: null,
      all: [{ name: 'Name', matchedCards: [] }],
    };
    expect(newState).toEqual(expectedState);
  });
});
