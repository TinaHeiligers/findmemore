/* global describe, it, expect */
import Immutable from 'immutable';
import reducer, { initialState } from 'redux/shared/sharedReducer';
import sharedActions from 'redux/shared/sharedActions';

describe('shared reducer', () => {
  const defaultState = reducer(initialState, { type: 'unexpected' });
  it('returns an object', () => {
    expect(defaultState).toBeInstanceOf(Object);
  });
  it('returns an object equal to initialState', () => {
    expect(defaultState.keySeq().toArray()).toEqual(expect.arrayContaining(['event', 'modalVisible']));
  });
  it('updates state on SHOW_MODAL', () => {
    const testAction = sharedActions.showModal();
    const newState = reducer(defaultState, testAction);
    expect(newState.get('modalVisible')).toEqual(true);
  });
  it('updates state on HIDE_MODAL', () => {
    const testAction = sharedActions.hideModal();
    const newState = reducer(defaultState, testAction);
    expect(newState.get('modalVisible')).toEqual(false);
  });
});
