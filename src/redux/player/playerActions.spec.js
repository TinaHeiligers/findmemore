/* global describe, it, expect */
import playerActions from 'redux/player/playerActions.js';
describe ('player action creators -> playerActions', () => {
  it('adds a player, given a name with addPlayer', () => {
    const testName = 'Name';
    const testAddPlayer = playerActions.addPlayer(testName);
    expect(testAddPlayer).toEqual({
      type: playerActions.ADD_PLAYER,
      name: testName,
    });
  });
  it('sets the index of the first player with setFirstPlayer  -> playerActions', () => {
    const testSetFirstPlayer = playerActions.setFirstPlayer();
    expect(testSetFirstPlayer).toEqual({ type: playerActions.SET_FIRST_PLAYER });
  });
  it('switches players with switchPlayer => playerActions', () => {
    const testSwitchPlayer = playerActions.switchPlayer();
    expect(testSwitchPlayer).toEqual({ type: playerActions.SWITCH_PLAYER });
  });
  it('updates total score with updateTotalScore -> playerActions', () => {
    const testTotalMatchedCards = 4;
    const testUpdateTotalScore = playerActions.updateTotalScores(testTotalMatchedCards);
    expect(testUpdateTotalScore).toEqual({
      type: playerActions.UPDATE_TOTAL_SCORE,
      totalScores: testTotalMatchedCards,
    });
  });
  it('updates a player\'s score with updatePlayerScore -> playerActions', () => {
    const testUpdatePlayerScore = playerActions.updatePlayerScore();
    expect(testUpdatePlayerScore).toEqual({ type: playerActions.UPDATE_PLAYER_SCORE });
  });
  it('issues an action to determine the game winner -> playerActions', () => {
    const testDetermineGameWinner = playerActions.determineGameWinner();
    expect(testDetermineGameWinner).toEqual({ type: playerActions.DETERMINE_GAME_WINNER });
  });
  it('issues an action to reset the player scores -> playerActions', () => {
    const testResetPlayerScores = playerActions.resetPlayerScores();
    expect(testResetPlayerScores).toEqual({ type: playerActions.RESET_PLAYER_SCORES });
  });
});
