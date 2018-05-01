import { combineReducers } from 'redux';
import count from 'ducks/counter/counterReducer';
import player from 'ducks/player/playerReducer';
export default {
  count,
  player,
};

