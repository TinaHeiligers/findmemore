import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import counterActions, { INCREMENT_REQUESTED } from 'ducks/counter/counterActions.js';

function* incrementAsyncWatcher () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsyncWorker)
}

export function* incrementAsyncWorker (action) {
  yield call(delay, 1000)
  yield put(counterActions.increment())
}

export const sagas = [incrementAsyncWatcher]

