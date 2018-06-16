/* global describe, it, expect */
import { put, takeEvery } from 'redux-saga/effects';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import sharedActions from 'redux/shared/sharedActions';
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
describe.only('game saga -> startGame', () => {
  const testLevel = { level: 'easy' };
  const startGameGen = startGame(testLevel);
  it('should put RESET_PLAYER_SCORES', () => {
    expect(startGameGen.next().value)
    .toEqual(put({ type: playerActions.RESET_PLAYER_SCORES }));
  });
  it('should put UPDATE_TOTAL_SCORE after RESET_PLAYER_SCORES', () => {
    expect(startGameGen.next(playerActions.resetPlayerScores()).value)
    .toEqual(put({ type: playerActions.UPDATE_TOTAL_SCORE, totalScores: 0 }));
  });
  it('should put RESET_MATCHED_CARDS_COUNT after UPDATE_TOTAL_SCORE', () => {
    expect(startGameGen.next(playerActions.updateTotalScores()).value)
    .toEqual(put({ type: cardsActions.RESET_MATCHED_CARDS_COUNT }));
  });
  it('should put RESET_SELECTED_CARDS after RESET_MATCHED_CARDS_COUNT', () => {
    expect(startGameGen.next(cardsActions.resetMatchedCardsCount()).value)
    .toEqual(put({ type: gameActions.START_NEXT_TURN }));
  });
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
    .toEqual(takeEvery(gameActions.SET_GAME_OVER, setGameOver));
  });
});
describe('game saga -> setGameOver', () => {
  const setGameOverGen = setGameOver();
  it('should put END_GAME', () => {
    expect(setGameOverGen.next().value)
    .toEqual(put({ type: gameActions.END_GAME }));
  });
  it('should put DETERMINE_GAME_WINNER after END_GAME', () => {
    expect(setGameOverGen.next(gameActions.endGame()).value)
    .toEqual(put({ type: playerActions.DETERMINE_GAME_WINNER }));
  });
  it('should put SHOW_MODAL after DETERMINE_GAME_WINNER', () => {
    expect(setGameOverGen.next(playerActions.determineGameWinner()).value)
    .toEqual(put({ type: sharedActions.SHOW_MODAL }));
  });
});
