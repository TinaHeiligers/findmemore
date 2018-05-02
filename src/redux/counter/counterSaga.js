import { delay } from 'redux-saga'
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { INCREMENT_REQUESTED, increment } from 'redux/counter/counterActions';


function* incrementAsyncWatcher () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsyncWorker)
}

export function* incrementAsyncWorker (action) {
  yield call(delay, 100)
  yield put(increment())
}

export default function* rootSaga() {
  yield all([
    fork(incrementAsyncWatcher),
  ]);
}
