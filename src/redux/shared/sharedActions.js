const sharedActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  showModal: (event) => ({ type: sharedActions.SHOW_MODAL, event }),
  hideModal: () => ({ type: sharedActions.HIDE_MODAL }),
}
export default sharedActions;
