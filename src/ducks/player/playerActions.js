const playersActions = {
  ADD_PLAYER: 'ADD_PLAYER',
  WELCOME_PLAYER: 'WELCOME_PLAYER',
  addPlayer: (name) => ({ type: playersActions.ADD_PLAYER, name }),
  welcomePlayer: (player) => ({ type: playersActions.WELCOME_PLAYER, player }),
}
export default playersActions;
