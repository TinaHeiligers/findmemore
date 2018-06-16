import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, handleClose, winningNames }) => {
  const showHideStyle = show ? 'block' : 'none';
  return (
    <ModalDiv showModal={ showHideStyle }>
      <ModalSection onClick={ handleClose }>
        <div>Game over!</div>
        <div style={ { fontSize: '6vh' } }>Well done { winningNames }, you won!</div>
      </ModalSection>
    </ModalDiv>
  );
};
export default Modal;

const ModalDiv = styled.div`
  display: ${props => props.showModal};
  position: fixed;
  top: 29%;
  left: 5%;
  width: 90%;
  background: radial-gradient(#c8e60087, #e68400a6);
  border-radius: 25px;
`

const ModalSection = styled.section`
  text-align: center;
  color: #8b0000;
  font-size: 5em;
  text-shadow:
    0.1vw 0.1vw 0 black,
    -0.1vw -0.1vw 0 black,
    0.1vw -0.1vw 0 black,
    -0.1vw 0.1vw 0 black,
    0.1vw 0.1vw 0 black,
    0vw 0vw 1vw black;
  margin-top: 0.1vh;
  font-size: 8vw;
`;
