/* global describe, it, expect */
import sharedActions from 'redux/shared/sharedActions.js';
describe ('shared action creators -> sharedActions', () => {
  it('issues a showModal action', () => {
    const testShowModal = sharedActions.showModal();
    expect(testShowModal).toEqual({ type: sharedActions.SHOW_MODAL });
  });
  it('issues a hideModal action', () => {
    const testHideModal = sharedActions.hideModal();
    expect(testHideModal).toEqual({ type: sharedActions.HIDE_MODAL });
  });
});
