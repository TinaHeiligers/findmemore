import Immutable from 'immutable';
import gameActions from 'redux/game/gameActions';
// const { START_GAME, SWITCH_TURNS, PLAYER_TURN } = gameActions;

export const GAME_STATE = Immutable.Map({
  unstarted: 'unstarted',
  playerTurn: 'playerTurn',
  switchTurns: 'switchTurns',
  over: 'over',
});

const initialState = Immutable.Map({
  level: null,
  state: GAME_STATE.get('unstarted'),
  cards: Immutable.List(),
});
export default function gameReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case gameActions.START_GAME: {
      const newGame = Immutable.Map({ 'level': action.level, state: GAME_STATE.get('playerTurn') });
      const newState = currentState.merge(newGame);
      return newState;
    }
    case gameActions.SWITCH_TURNS: {
      return currentState.set('state', GAME_STATE.get('switchTurns'));
    }
    case gameActions.PLAYER_TURN: {
      return currentState.set('state', GAME_STATE.get('playerTurn'));
    }
    case gameActions.END_GAME: {
      return currentState.set('state', GAME_STATE.get('over'));
    }
    default:
      return currentState;
  }
}
