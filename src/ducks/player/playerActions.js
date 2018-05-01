const playersActions = {
  ADD_PLAYER: 'ADD_PLAYER',
  addPlayer: (name) => ({ type: playersActions.ADD_PLAYER, name }),
}
export default playersActions;
