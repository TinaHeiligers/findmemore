import { combineReducers } from 'redux';
import count from 'redux/counter/counterReducer';
import players from 'redux/player/playerReducer';
import game from 'redux/game/gameReducer';
import cards from 'redux/cards/cardsReducer';
export default {
  count,
  players,
  game,
  cards,
};

