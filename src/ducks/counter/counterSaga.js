import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects';
import { INCREMENT_REQUESTED, increment } from 'ducks/counter/counterActions';


function* incrementAsyncWatcher () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsyncWorker)
}

export function* incrementAsyncWorker (action) {
  yield call(delay, 100)
  yield put(increment())
}

export const counterSagas = [incrementAsyncWatcher]
