export const ADD_PLAYER = 'ADD_PLAYER';
export const GET_PLAYERS = 'GET_PLAYERS';

const actions = {
  addPlayer: (name) => ({ type: ADD_PLAYER, name: name }),
}
export default actions;
