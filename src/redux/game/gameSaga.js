import { takeEvery, call, fork, all, put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';


export function* startGameWatcher() {
  yield takeEvery(gameActions.START_GAME, startGame);
};

export function* startGame(payload) {
  try {
    yield put({
      type: cardsActions.GET_CARDS_REQUEST,
      level: payload.level,
    });
    yield put({
      type: playerActions.SET_FIRST_PLAYER_REQUEST,
    })

  } catch (err) {
    yield put({ type: gameActions.START_GAME_ERROR, error: err });
  }
};

export default function* rootSaga() {
  yield all([
    fork(startGameWatcher),
  ]);
}
