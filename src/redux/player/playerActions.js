const playerActions = {
  ADD_PLAYER: 'ADD_PLAYER',
  SET_FIRST_PLAYER_REQUEST: 'SET_FIRST_PLAYER_REQUEST',
  SET_FIRST_PLAYER: 'SET_FIRST_PLAYER',
  SWITCH_PLAYER: 'SWITCH_PLAYER',
  UPDATE_TOTAL_SCORE: 'UPDATE_TOTAL_SCORE',
  UPDATE_PLAYER_SCORE: 'UPDATE_PLAYER_SCORE',
  DETERMINE_GAME_WINNER: 'DETERMINE_GAME_WINNER',
  addPlayer: (name) => ({ type: playerActions.ADD_PLAYER, name }),
  setFirstPlayer: () => ({ type: playerActions.SET_FIRST_PLAYER }),
  switchPlayer: () => ({ type: playerActions.SWITCH_PLAYER }),
  updateTotalScores: (totalMatchedCardsCount) => ({ type: playerActions.UPDATE_TOTAL_SCORE, totalScores: totalMatchedCardsCount }),
  updatePlayerScore: () => ({ type: playerActions.UPDATE_PLAYER_SCORE }),
  determineGameWinner: () => ({ type: playerActions.DETERMINE_GAME_WINNER }),
};
export default playerActions;
