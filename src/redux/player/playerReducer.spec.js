/* global describe, it, expect */
import Immutable from 'immutable';
import reducer, { initialState } from 'redux/player/playerReducer';
import playerActions from 'redux/player/playerActions';

describe('player reducer -> addPlayer', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining(["current", "all"]));
  });
  it('updates state on ADD_PLAYER', () => {
    const testNewPlayer = 'Name';
    const testAction = playerActions.addPlayer(testNewPlayer);
    const newState = reducer(defaultState, testAction);
    expect(newState.get('all').toJS()).toEqual([{ name: 'Name', matchedCards: [] }]);
  });
  it('updates state on SET_FIRST_PLAYER', () => {
    const testAction = playerActions.setFirstPlayer();
    const newState = reducer(defaultState, testAction);
    expect(newState.get('current')).toEqual(0);
  })
});
