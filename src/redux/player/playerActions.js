const playerActions = {
  ADD_PLAYER: 'ADD_PLAYER',
  SET_FIRST_PLAYER_REQUEST: 'SET_FIRST_PLAYER_REQUEST',
  SET_FIRST_PLAYER: 'SET_FIRST_PLAYER',
  addPlayer: (name) => ({ type: playerActions.ADD_PLAYER, name }),
  setFirstPlayer: () => ({ type: playerActions.SET_FIRST_PLAYER }),
}
export default playerActions;
