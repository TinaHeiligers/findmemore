import { all } from 'redux-saga/effects';
import counterSagas from 'redux/counter/counterSaga';
import playerSagas from 'redux/player/playerSaga';
import gameSagas from 'redux/game/gameSaga';
import cardsSagas from 'redux/cards/cardsSaga';
import sharedSagas from 'redux/shared/sharedSagas';
export default function* rootSaga(getState) {
  yield all([
    counterSagas(),
    playerSagas(),
    gameSagas(),
    cardsSagas(),
    sharedSagas(),
  ]);
}
