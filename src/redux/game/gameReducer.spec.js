/* global describe, it, expect */
import Immutable from 'immutable';
import reducer, { initialState } from 'redux/game/gameReducer';
import gameActions from 'redux/game/gameActions';

describe('game reducer -> start game', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining([
      'level',
      'state',
      'cards',
    ]));
  });
  it('updates state on START_GAME', () => {
    let testAction = gameActions.startGame('easy');
    const newState = reducer(defaultState, testAction);
    // compare all key values
    const [...expectedEntries] = newState.entries();
    expect(expectedEntries).toEqual([['level', 'easy'], ['state', 'inProgress'], ['cards', Immutable.List()]]);
    // compare all values
    const newStateValues = [...newState.values()];
    expect(newStateValues).toEqual(['easy', 'inProgress', Immutable.List()])
  });
});
