import { takeEvery, put, fork, all } from 'redux-saga/effects';
import playerActions from 'redux/player/playerActions';

export function* setFirstPlayer() {
  yield takeEvery(playerActions.SET_FIRST_PLAYER_REQUEST, executeSetFirstPlayer);
};
export function* executeSetFirstPlayer() {
  yield put({
    type: playerActions.SET_FIRST_PLAYER,
  });
}
export default function* rootSaga() {
  yield all([
    fork(setFirstPlayer),
  ]);
}

