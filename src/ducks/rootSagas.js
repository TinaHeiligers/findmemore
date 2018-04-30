import { call, spawn } from 'redux-saga/effects';
import { counterSagas } from 'ducks/counter/counterSaga';


export function* rootSaga () {
  const allCounterSagas = [...counterSagas];

  yield allCounterSagas.map(saga =>
    spawn(function* () {
      let isSyncError = false
      while (!isSyncError) {
        isSyncError = true
        try {
          setTimeout(() => { isSyncError = false })
          yield call(saga)
        } catch (e) {
          if (isSyncError) {
            throw new Error(saga.name + ' was terminated because it threw an exception on startup.')
          }
          // handle exceptions here
        }
      }
    })
  );
}
