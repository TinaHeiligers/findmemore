import { INCREMENT } from 'redux/counter/counterActions';

const initialState = 0;

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return currentState + 1;
    default:
      return currentState;
  }
}
