/* global describe, it, expect */
import { put, takeEvery } from 'redux-saga/effects';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import { startGameWatcher, startGame } from 'redux/game/gameSaga';

describe('game saga -> startGameWatcher', () => {
  const startGameWatcherGen = startGameWatcher();
  it('should act on every START_GAME action', () => {
    expect(startGameWatcherGen.next().value)
    .toEqual(takeEvery(gameActions.START_GAME, startGame));
  });
});
describe('game saga -> startGame', () => {
  const testLevel = { level: 'easy' };
  const startGameGen = startGame(testLevel);
  it('should put GET_CARDS_REQUEST action given a game level', () => {
    expect(startGameGen.next(testLevel).value)
    .toEqual(put({ type: cardsActions.GET_CARDS_REQUEST, level: testLevel.level }));
  });
  it('should put SET_FIRST_PLAYER_REQUEST action', () => {
    expect(startGameGen.next().value)
    .toEqual(put({ type: playerActions.SET_FIRST_PLAYER_REQUEST }));
  });
  it('should put START_GAME_ERROR action on an error', () => {
    const testError = new Error('Error');
    expect(startGameGen.throw(testError).value)
    .toEqual(put({ type: playerActions.START_GAME_ERROR, error: testError }));
  });
});
