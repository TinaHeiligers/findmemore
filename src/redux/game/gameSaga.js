import { takeEvery, fork, all, put } from 'redux-saga/effects';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import sharedActions from 'redux/shared/sharedActions';

export function* startNextTurnWatcher() {
  yield takeEvery(gameActions.START_NEXT_TURN, startNextTurn);
}
export function* startNextTurn() {
  yield put({ type: cardsActions.RESET_CHOSEN_CARDS });
  yield put({ type: gameActions.PLAYER_TURN });
}
export function* startGameWatcher() {
  yield takeEvery(gameActions.START_GAME, startGame);
}
export function* startGame(payload) {
  try {
    yield put({
      type: cardsActions.GET_CARDS_REQUEST,
      level: payload.level,
    });
    yield put({
      type: playerActions.SET_FIRST_PLAYER_REQUEST,
    });
  } catch (err) {
    yield put({ type: gameActions.START_GAME_ERROR, error: err });
  }
}
export function* setGameOverWatcher() {
  yield takeEvery(gameActions.SET_GAME_OVER, setGameOver);
}

export function* setGameOver() {
  // on end game, I want to notify the players that the game is over
  // I also want to notify the players of who won.
  console.log('In setGameOver in game saga')
  yield put({ type: gameActions.END_GAME });
  yield put({ type: sharedActions.SHOW_MODAL });
}
export default function* rootSaga() {
  yield all([
    fork(startNextTurnWatcher),
    fork(startGameWatcher),
    fork(setGameOverWatcher),
  ]);
}
