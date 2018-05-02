import { call, put, takeEvery } from 'redux-saga/effects';
import playerActions from 'redux/player/playerActions';
import { setFirstPlayerWatcher, setFirstPlayer } from 'redux/player/playerSaga';

const SEP = '\n      ';
const done = { done: true, value: undefined };

describe('player saga -> setFirstPlayerWatcher', () => {
  const steps = ['1) takes every START_GAME action'];
  const setFirstPlayerWatcherGen = setFirstPlayerWatcher();
  it('should act on every SET_FIRST_PLAYER_REQUEST action', () => {
    expect(setFirstPlayerWatcherGen.next().value)
    .toEqual(takeEvery(playerActions.SET_FIRST_PLAYER_REQUEST, setFirstPlayer));
  });
});
describe('player saga -> setFirstPlayer', () => {
  const steps = ['1) puts SET_FIRST_PLAYER'];
  const setFirstPlayerGen = setFirstPlayer();
  it('should put the SET_FIRST_PLAYER player action', () => {
    expect(setFirstPlayerGen.next().value)
    .toEqual(put({ type: playerActions.SET_FIRST_PLAYER }));
  });
});
