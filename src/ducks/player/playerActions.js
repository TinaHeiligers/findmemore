const playersActions = {
  ADD_PLAYER: 'ADD_PLAYER',
  GET_PLAYERS: 'GET_PLAYERS',
  addPlayer: (name) => ({ type: playersActions.ADD_PLAYER, name }),
}
export default playersActions;
