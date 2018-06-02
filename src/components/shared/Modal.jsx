import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  const showHideStyle = show ? styles.displayBlock : styles.displayNone;
  console.log(showHideStyle)

  return (
    <div style={showHideStyle}>
      <section style={styles.modalMain}>
        Game over!
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
const styles = {
  modalMain: {
    textAlign: 'center',
    color: 'white',
    fontSize: '5em',
  },
  displayBlock: {
    display: 'block',
    position: 'fixed',
    top: '5%',
    left: '5%',
    width: '90%',
    background: '#c8e60087',
  },
  displayNone: {
    display: 'none',
  },
};
