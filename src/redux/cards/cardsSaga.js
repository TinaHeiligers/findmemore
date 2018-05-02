import { takeEvery, call, all, fork, put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import cardsActions from 'redux/cards/cardsActions';
import gameActions from 'redux/game/gameActions';
import { getCards } from 'redux/cards/cardsServices';

export function* getCardsRequestPlease() {
  yield takeEvery(cardsActions.GET_CARDS_REQUEST, executeGetCardsRequest);
};

export function* executeGetCardsRequest(payload) {
  console.log('payload', payload)
  try {
    const result = yield call(getCards, payload.level);
    console.log('result', result)
    yield put({
      type: cardsActions.GET_CARDS_SUCCESS,
      cards: result.cards,
    });
    // push to the game component
  } catch (err) {
    console.error(err)
    yield put({ type: cardsActions.GET_CARDS_ERROR, error: err });
  }
};

export default function* rootSaga() {
  yield all([
    fork(getCardsRequestPlease),
  ]);
}

