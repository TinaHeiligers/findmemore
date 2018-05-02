import gameActions from 'redux/game/gameActions';
const { START_GAME } = gameActions;

export const GAME_STATE = {
  unstarted: 'unstarted',
  inProgress: 'inProgress',
  over: 'over',
};

const initialState = {
  level: null,
  state: GAME_STATE.unstarted,
  cards: [],
};
export default function gameReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case START_GAME:
      const newGame = {
        level: action.level,
        state: GAME_STATE.inProgress,
      }
      return {
        ...currentState,
        level: newGame,
      }
    default:
      return currentState;
  };
};
