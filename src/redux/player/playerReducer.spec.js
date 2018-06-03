/* global describe, it, expect */
import Immutable from 'immutable';
import reducer, { initialState } from 'redux/player/playerReducer';
import playerActions from 'redux/player/playerActions';

describe('player reducer', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining(["current", "all", "totalScores"]));
  });
  it('updates state on ADD_PLAYER', () => {
    const testNewPlayer = 'Name';
    const testAction = playerActions.addPlayer(testNewPlayer);
    const newState = reducer(defaultState, testAction);
    expect(newState.get('all').toJS()).toEqual([{ name: 'Name', playerScore: 0 }]);
  });
  it('updates state on SET_FIRST_PLAYER', () => {
    const testAction = playerActions.setFirstPlayer();
    const newState = reducer(defaultState, testAction);
    expect(newState.get('current')).toEqual(0);
  });
  it('updates state on SWITCH_PLAYER', () => {
    const testPlayer1 = Immutable.Map({ 'name': 'testPlayer1', 'playerScore': 0 });
    const testPlayer2 = Immutable.Map({ 'name': 'testPlayer2', 'playerScore': 0 });
    const testState = defaultState.update('all', all => all.push(testPlayer1))
    const testState2 = testState.update('all', all => all.push(testPlayer2))
    const testState3 = testState2.set('current', 0);
    const testAction = playerActions.switchPlayer();
    const newState = reducer(testState3, testAction);
    expect(newState.get('current')).toEqual(1);
  });
  it('updates state on UPDATE_TOTAL_SCORE', () => {
    const testMatchedCardsCount = 4;
    const testAction = playerActions.updateTotalScores(testMatchedCardsCount);
    const newState = reducer(defaultState, testAction);
    expect(newState.get('totalScores')).toEqual(2);
  });
  it('updates a player\'s score in state on UPDATE_PLAYER_SCORE', () => {
    // set up a state to update
    const testPlayer1 = Immutable.Map({ 'name': 'testPlayer1', 'playerScore': 0 });
    const testPlayer2 = Immutable.Map({ 'name': 'testPlayer2', 'playerScore': 0 });
    const testState = defaultState.update('all', all => all.push(testPlayer1))
    const testState2 = testState.update('all', all => all.push(testPlayer2))
    const testState3 = testState2.set('current', 0);
    const testState4 = testState3.set('totalScores', 2);
    const testAction = playerActions.updatePlayerScore();
    const newState = reducer(testState4, testAction);
    expect(newState.getIn(['all', 0]).get('playerScore')).toEqual(1);
    expect(newState.getIn(['all', 0]).get('playerScore')).toEqual(newState.get('totalScores')/2);
  });
  it('determines the game winner names on DETERMINE_GAME_WINNER', () => {
    const testPlayer1 = Immutable.Map({ 'name': 'testPlayer1', 'playerScore': 2 });
    const testPlayer2 = Immutable.Map({ 'name': 'testPlayer2', 'playerScore': 4 });
    const testState = defaultState.update('all', all => all.push(testPlayer1));
    const testState2 = testState.update('all', all => all.push(testPlayer2));
    const testAction = playerActions.determineGameWinner();
    const newState = reducer(testState2, testAction);
    expect(newState.get('gameWinnerNames')).toEqual('testPlayer2');
  });
  it('two names on DETERMINE_GAME_WINNER when there is a match in playerScores', () => {
    const testPlayer1 = Immutable.Map({ 'name': 'testPlayer1', 'playerScore': 3 });
    const testPlayer2 = Immutable.Map({ 'name': 'testPlayer2', 'playerScore': 3 });
    const testState = defaultState.update('all', all => all.push(testPlayer1));
    const testState2 = testState.update('all', all => all.push(testPlayer2));
    const testAction = playerActions.determineGameWinner();
    const newState = reducer(testState2, testAction);
    expect(newState.get('gameWinnerNames')).toEqual('testPlayer1 and testPlayer2');
  });
  it('resets the player scores on starting a new game', () => {
    const testPlayer1 = Immutable.Map({ 'name': 'testPlayer1', 'playerScore': 1 });
    const testPlayer2 = Immutable.Map({ 'name': 'testPlayer2', 'playerScore': 2 });
    const testState = defaultState.update('all', all => all.push(testPlayer1));
    const testState2 = testState.update('all', all => all.push(testPlayer2));
    const testAction = playerActions.resetPlayerScores();
    const newState = reducer(testState2, testAction);
    expect(newState.getIn(['all', 0, 'playerScore'])).toEqual(0);
    expect(newState.getIn(['all', 1, 'playerScore'])).toEqual(0);
  });
});
