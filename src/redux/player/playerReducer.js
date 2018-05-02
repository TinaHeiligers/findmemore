import playerActions from 'redux/player/playerActions';
const { ADD_PLAYER, SET_FIRST_PLAYER } = playerActions;

export const initialState = {
  current: null,
  all: [],
};
export default function playersReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case ADD_PLAYER:
      const newPlayer = {
        name: action.name,
        matchedCards: [],
      }
      return {
        ...currentState,
        all: (currentState.all || []).concat([newPlayer]),
      }
    case SET_FIRST_PLAYER:
    return {
      ...currentState,
      current: 0,
    }
    default:
      return currentState;
  };
};
