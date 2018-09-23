import { all } from 'redux-saga/effects';
import playerSagas from 'redux/player/playerSaga';
import gameSagas from 'redux/game/gameSaga';
import cardsSagas from 'redux/cards/cardsSaga';
export default function* rootSaga(getState) {
  yield all([
    playerSagas(),
    gameSagas(),
    cardsSagas(),
  ]);
}
