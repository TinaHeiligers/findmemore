import { combineReducers } from 'redux';
import count from 'ducks/counter/counterReducer';
import players from 'ducks/player/playerReducer';
export default {
  count,
  players,
};

