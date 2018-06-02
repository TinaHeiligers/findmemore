import Immutable from 'immutable';
import sharedActions from 'redux/shared/sharedActions';

const initialState = Immutable.Map({
  event: null,
  modalVisible: false,
});
export default function sharedReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case sharedActions.SHOW_MODAL: {
      const newShared = Immutable.Map({ 'event': null, modalVisible: true });
      const newState = currentState.merge(newShared);
      return newState;
    }
    case sharedActions.HIDE_MODAL: {
      const newShared = Immutable.Map({ 'event': null, modalVisible: false });
      const newState = currentState.merge(newShared);
      return newState;
    }
    default:
      return currentState;
  }
}
