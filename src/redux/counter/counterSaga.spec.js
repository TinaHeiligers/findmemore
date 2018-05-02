/* global describe, it, expect */
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { increment } from 'redux/counter/counterActions';
import { incrementAsyncWorker } from 'redux/counter/counterSaga';

const SEP = '\n      ';
const done = { done: true, value: undefined };

describe('incrementAsync', () => {
  const steps = ['1) calls delay(100)', '2) puts increment()'];
  it(steps.join(SEP), () => {
    const saga = incrementAsyncWorker();
    expect(saga.next().value).toEqual(call(delay, 100));
    expect(saga.next().value).toEqual(put(increment()));
    expect(saga.next()).toEqual(done);
  });
});
