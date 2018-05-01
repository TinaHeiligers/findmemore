import { ADD_PLAYER } from 'ducks/player/playerActions';

const initialState = {
  name: null,
  matchedCards: null,
};
export default function reducer(currentState = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {...currentState, name: action.name, matchedCards: []}
    default:
      return currentState;
  };
};
