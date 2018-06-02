const sharedActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  showModal: () => ({ type: sharedActions.SHOW_MODAL }),
  hideModal: () => ({ type: sharedActions.HIDE_MODAL }),
}
export default sharedActions;
