import Immutable from 'immutable';
import gameActions from 'redux/game/gameActions';
const { START_GAME } = gameActions;

export const GAME_STATE = Immutable.Map({
  unstarted: 'unstarted',
  inProgress: 'inProgress',
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
    case START_GAME: {
      const newGame = Immutable.Map({ 'level': action.level, state: GAME_STATE.get('inProgress') });
      const newState = currentState.merge(newGame);
      return newState;
    }
    default:
      return currentState;
  }
}
