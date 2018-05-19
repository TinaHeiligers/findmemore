import { takeEvery, call, all, fork, put } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import cardsActions from 'redux/cards/cardsActions';
import { getCards } from 'redux/cards/cardsServices';

export function* getCardsRequestWatcher() {
  yield takeEvery(cardsActions.GET_CARDS_REQUEST, getCardsRequest);
}

export function* getCardsRequest(payload) {
  try {
    const result = yield call(getCards, payload.level);
    yield put({
      type: cardsActions.GET_CARDS_SUCCESS,
      cards: result,
    });
    // push to the game component
    yield put(push('/game'));
  } catch (err) {
    yield put({ type: cardsActions.GET_CARDS_ERROR, error: err });
  }
}

export function* matchCardsRequestWatcher() {
  yield takeEvery(cardsActions.MATCH_CARDS_REQUEST, matchCardsRequest);
}

export function* matchCardsRequest() {
  try {
    yield put({ type: cardsActions.EXTRACT_CHOSEN_CARDS });
    yield put({ type: cardsActions.MATCH_CARDS });
    yield put({ type: cardsActions.RESET_CHOSEN_CARDS });
    // yield the update player score action, player turn action and game state actions now
  } catch (err) {
    yield put({ type: cardsActions.MATCH_CARDS_ERROR, error: { message: 'cannot match cards' } });
  }
}

export default function* rootSaga() {
  yield all([
    fork(getCardsRequestWatcher),
    fork(matchCardsRequestWatcher),
  ]);
}

