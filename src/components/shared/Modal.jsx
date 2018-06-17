import React from 'react';
import styled from 'styled-components';

// make this generic to handle switch player turn as well.
export const GameOverModal = ({ show, handleClose, winningNames }) => {
  const showHideStyle = show ? 'block' : 'none';
  const message = `Well done ${ winningNames }, you won!`;
  return (
    <ModalDiv showModal={ showHideStyle }>
      <ModalSection onClick={ handleClose }>
        <div>Game over!</div>
        <div style={ { fontSize: '6vh' } }>{ message }</div>
      </ModalSection>
    </ModalDiv>
  );
};
export const SwitchPlayerTurnsModal = ({ show, handleClose, nextPlayerName }) => {
  const showHideStyle = show ? 'block' : 'none';
  const nextPlayerMessage = `It's your turn ${nextPlayerName}, click anywhere to start your turn`;
  return (
    <ModalDiv showModal={ showHideStyle }>
      <ModalSection onClick={ handleClose }>
        <div style={ { fontSize: '6vh' } }>{ nextPlayerMessage }</div>
      </ModalSection>
    </ModalDiv>
  );
};

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
