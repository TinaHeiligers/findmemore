import { takeEvery, call, all, fork, put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import cardsActions from 'redux/cards/cardsActions';
import gameActions from 'redux/game/gameActions';
import { getCards } from 'redux/cards/cardsServices';

export function* getCardsRequestWatcher() {
  yield takeEvery(cardsActions.GET_CARDS_REQUEST, getCardsRequest);
};

export function* getCardsRequest(payload) {
  try {
    const result = yield call(getCards, payload.level);
    console.log('result', result)
    yield put({
      type: cardsActions.GET_CARDS_SUCCESS,
      cards: result,
    });
    // push to the game component
    yield put(push('/game'))
  } catch (err) {
    yield put({ type: cardsActions.GET_CARDS_ERROR, error: err });
  }
};

export default function* rootSaga() {
  yield all([
    fork(getCardsRequestWatcher),
  ]);
}

