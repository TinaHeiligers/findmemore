import { takeEvery, call, all, fork, put, select } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import gameActions from 'redux/game/gameActions';
import { getCards } from 'redux/cards/cardsServices';

export const selectedCards = state => state.getIn(['cards', 'selectedCards']);
export const hasMatch = state => state.getIn(['cards', 'hasMatch']);
export const totalMatchedCards = state => state.getIn(['cards', 'totalMatchedCards']);
export const allGameCards = state => state.getIn(['cards', 'all']).size;

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

export function* chooseCardRequestWatcher() {
  yield takeEvery(cardsActions.CHOOSE_CARD_REQUEST, chooseCardRequest);
}

export function* chooseCardRequest(action) {
  yield put({ type: cardsActions.CHOOSE_CARD, index: action.index });
  const cards = yield select(selectedCards);
  if (cards.size === 2) {
    yield put(cardsActions.matchCardsRequest());
    yield put(gameActions.switchTurns());
    const gameCards = yield select(allGameCards);
    const matchedCardsCount = yield select(totalMatchedCards);
    console.log("gameCards", gameCards)
    console.log("matchedCardsCount", matchedCardsCount)
    if (gameCards === matchedCardsCount + 2) {
      // the test is skipping this path
      yield put(gameActions.setGameOver());
    }
    yield put(playerActions.switchPlayer());
  }
}

export function* matchCardsRequestWatcher() {
  yield takeEvery(cardsActions.MATCH_CARDS_REQUEST, matchCardsRequest);
}

export function* matchCardsRequest() {
  try {
    yield put({ type: cardsActions.MATCH_CARDS });
    const matched = yield select(hasMatch);
    if (matched) {
      yield put({ type: cardsActions.COUNT_MATCHED_CARDS });
      const matchedCardsCount = yield select(totalMatchedCards);
      yield put({ type: playerActions.UPDATE_PLAYER_SCORE });
      yield put({ type: playerActions.UPDATE_TOTAL_SCORE, totalScores: matchedCardsCount });
    }
  } catch (err) {
    yield put({ type: cardsActions.MATCH_CARDS_ERROR, error: { message: 'cannot match cards' } });
  }
}

export default function* rootSaga() {
  yield all([
    fork(getCardsRequestWatcher),
    fork(chooseCardRequestWatcher),
    fork(matchCardsRequestWatcher),
  ]);
}

