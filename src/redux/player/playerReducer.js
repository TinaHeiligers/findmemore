import Immutable from 'immutable';
import playerActions from 'redux/player/playerActions';
const { ADD_PLAYER, SET_FIRST_PLAYER } = playerActions;

export const initialState = Immutable.Map({
  current: null,
  all: Immutable.List(),
  totalScores: 0,
});
export default function playersReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case ADD_PLAYER:
      const newPlayer = Immutable.Map({ 'name': action.name, 'matchedCards': Immutable.List() });
      return currentState.update('all', all => all.push(newPlayer));
    case SET_FIRST_PLAYER:
      return currentState.set('current', 0);
    default:
      return currentState;
  }
}
