/* global describe, it, expect */
import gameActions from 'redux/game/gameActions.js';
describe ('game action creators -> gameActions', () => {
  it('startGame starts a new game, given a level', () => {
    const testLevel = 'easy';
    const testStartGame = gameActions.startGame(testLevel);
    expect(testStartGame).toEqual({
      type: gameActions.START_GAME,
      level: testLevel,
    });
  });
  it('startNextTurn starts a new game turn', () => {
    const testStartNextTurn = gameActions.startNextTurn();
    expect(testStartNextTurn).toEqual({ type: gameActions.START_NEXT_TURN });
  });
  it('switchTurns switches between game turns', () => {
    const testSwitchTurns = gameActions.switchTurns();
    expect(testSwitchTurns).toEqual({ type: gameActions.SWITCH_TURNS });
  });
  it('playerTurn issues a PLAYER_TURN action', () => {
    const testPlayerTurn = gameActions.playerTurn();
    expect(testPlayerTurn).toEqual({ type: gameActions.PLAYER_TURN });
  });
});
