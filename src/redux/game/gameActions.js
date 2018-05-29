const gameActions = {
  START_GAME: 'START_GAME',
  START_NEXT_TURN: 'START_NEXT_TURN',
  SWITCH_TURNS: 'SWITCH_TURNS',
  PLAYER_TURN: 'PLAYER_TURN',
  startGame: (level) => ({ type: gameActions.START_GAME, level }),
  startNextTurn: () => ({ type: gameActions.START_NEXT_TURN }),
  switchTurns: () => ({ type: gameActions.SWITCH_TURNS }),
  playerTurn: () => ({ type: gameActions.PLAYER_TURN }),
}
export default gameActions;
