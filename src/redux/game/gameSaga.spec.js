/* global describe, it, expect */
import { put, takeEvery } from 'redux-saga/effects';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import {
  startGameWatcher,
  startGame,
  startNextTurnWatcher,
  startNextTurn,
  setGameOverWatcher,
  setGameOver,
} from 'redux/game/gameSaga';

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
describe('game saga -> startNextTurnWatcher', () => {
  const startNextTurnWatcherGen = startNextTurnWatcher();
  it('should act on every START_NEXT_TURN action', () => {
    expect(startNextTurnWatcherGen.next().value)
    .toEqual(takeEvery(gameActions.START_NEXT_TURN, startNextTurn));
  });
});
describe('game saga -> startNextTurn', () => {
  const startNextTurnGen = startNextTurn();
  it('should put RESET_CHOSEN_CARDS action', () => {
    expect(startNextTurnGen.next().value)
    .toEqual(put({ type: cardsActions.RESET_CHOSEN_CARDS }));
  });
  it('should put PLAYER_TURN action after RESET_CHOSEN_CARDS', () => {
    expect(startNextTurnGen.next(cardsActions.resetChosenCards()).value)
    .toEqual(put({ type: gameActions.PLAYER_TURN }));
  });
});
describe('game saga -> setGameOverWatcher', () => {
  const setGameOverWatcherGen = setGameOverWatcher();
  it('should act on every SET_GAME_OVER action', () => {
    expect(setGameOverWatcherGen.next().value)
    .toEqual(takeEvery(gameActions.SET_GAME_OVER));
  });
});
describe('game saga -> setGameOver', () => {
  const setGameOver = setGameOver();
  it('should put END_GAME', () => {
    expect(setGameOver.next().value)
    .toEqual(put(gameActions.endGame()));
  });
});
