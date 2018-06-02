/* global describe, it, expect */
import Immutable from 'immutable';
import reducer, { initialState } from 'redux/game/gameReducer';
import gameActions from 'redux/game/gameActions';

describe('game reducer', () => {
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
    expect(expectedEntries).toEqual([['level', 'easy'], ['state', 'playerTurn'], ['cards', Immutable.List()]]);
    // compare all values
    const newStateValues = [...newState.values()];
    expect(newStateValues).toEqual(['easy', 'playerTurn', Immutable.List()])
  });
  it('updates state on SWITCH_TURNS', () => {
    let testAction = gameActions.switchTurns();
    const newState = reducer(defaultState, testAction);
    // compare all key values
    const [...expectedEntries] = newState.entries();
    expect(expectedEntries).toEqual([['level', null], ['state', 'switchTurns'], ['cards', Immutable.List()]]);
  });
  it('updates state on PLAYER_TURN', () => {
    let testAction = gameActions.playerTurn();
    const newState = reducer(defaultState, testAction);
    // compare all key values
    const [...expectedEntries] = newState.entries();
    expect(expectedEntries).toEqual([['level', null], ['state', 'playerTurn'], ['cards', Immutable.List()]]);
  });
  it('updates state on END_GAME', () => {
    let testAction = gameActions.endGame();
    const newState = reducer(defaultState, testAction);
    const [...actualEntries] = newState.entries();
    expect(actualEntries).toEqual([['level', null], ['state', 'over'], ['cards', Immutable.List()]]);
  });
});
