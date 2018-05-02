import reducer, { initialState, GAME_STATE } from 'redux/game/gameReducer';
import gameActions from 'redux/game/gameActions';

describe('game reducer -> start game', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(Object.keys(defaultState)).toEqual(expect.arrayContaining([
      'level',
      'state',
      'cards',
    ]));
  });
  it('updates state on START_GAME', () => {
    const testNewGame = 'easy';
    let testAction = gameActions.startGame(testNewGame);
    const newState = reducer(defaultState, testAction);
    const expectedState = {
      ...defaultState,
      level: testNewGame,
      state: 'inProgress'
    };
    expect(newState).toEqual(expectedState);
  });
});
