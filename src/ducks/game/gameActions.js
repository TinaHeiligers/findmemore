const gameActions = {
  START_GAME: 'START_GAME',
  startGame: (level) => ({ type: gameActions.START_GAME, level });
}
export default gameActions;
