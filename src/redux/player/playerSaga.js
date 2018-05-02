import { takeEvery, put, fork, all } from 'redux-saga/effects';
import playerActions from 'redux/player/playerActions';

export function* setFirstPlayerWatcher() {
  yield takeEvery(playerActions.SET_FIRST_PLAYER_REQUEST, setFirstPlayer);
};
export function* setFirstPlayer() {
  yield put({
    type: playerActions.SET_FIRST_PLAYER,
  });
}
export default function* rootSaga() {
  yield all([
    fork(setFirstPlayerWatcher),
  ]);
}

