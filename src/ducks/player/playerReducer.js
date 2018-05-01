import playerActions from 'ducks/player/playerActions';
const { ADD_PLAYER } = playerActions;

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
    default:
      return currentState;
  };
};
