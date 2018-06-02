const gameActions = {
  START_GAME: 'START_GAME',
  START_NEXT_TURN: 'START_NEXT_TURN',
  SWITCH_TURNS: 'SWITCH_TURNS',
  PLAYER_TURN: 'PLAYER_TURN',
  END_GAME: 'END_GAME',
  startGame: (level) => ({ type: gameActions.START_GAME, level }),
  startNextTurn: () => ({ type: gameActions.START_NEXT_TURN }),
  switchTurns: () => ({ type: gameActions.SWITCH_TURNS }),
  playerTurn: () => ({ type: gameActions.PLAYER_TURN }),
  endGame: () => ({ type: gameActions.END_GAME }),
}
export default gameActions;
