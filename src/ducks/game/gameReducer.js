import gameActions from 'ducks/game/gameActions';
const { START_GAME } = gameActions;

const initialState = {
  level: null,
  started: false,
  over: false,
};
export default function gameReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case START_GAME:
      const newGame = {
        level: action.level,
        started: true,
        over: false,
      }
  }
}
