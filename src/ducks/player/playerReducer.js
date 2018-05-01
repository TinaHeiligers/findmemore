import playerActions from 'ducks/player/playerActions';
const { ADD_PLAYER, WELCOME_PLAYER } = playerActions;

const initialState = {
  current: null,
  all: [],
  message: '',
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
    case WELCOME_PLAYER:
    console.log('*****REDUCER:', action)
      const message = `Welcome ${action.player.name}`;
      return {
        ...currentState,
        message,
      }
    default:
      return currentState;
  };
};
