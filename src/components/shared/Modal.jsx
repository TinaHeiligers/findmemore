import React from 'react';
import styled from 'styled-components';

export const GameOverModal = ({ handleClose, winningNames }) => {
  const message = `Well done ${ winningNames }, you won!`;
  return (
    <ModalDiv>
      <GameOverModalSection onClick={ handleClose }>
        <div style={ { textAlign: 'center' } }>Game over!</div>
        <div style={ { fontSize: '1.2em', textAlign: 'center' } }>{ message }</div>
      </GameOverModalSection>
    </ModalDiv>
  );
};
export const SwitchPlayerTurnsModal = ({ handleClose, nextPlayerName }) => {
  const nextPlayerMessage = `It's your turn ${nextPlayerName}, click anywhere to start your turn`;
  return (
    <ModalDiv>
      <PlayerTurnModalSection onClick={ handleClose }>
        <div style={ { fontSize: '1.2em', textAlign: 'center' } }>{ nextPlayerMessage }</div>
      </PlayerTurnModalSection>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 1vh;
  left: 4.5vw;
  width: 91vw;
  background: #fcfcdf6e;
  border-radius: 25px;
  border: 3px solid black;
`
const GameOverModalSection = styled.section`
  color: black;
  font-size: 1.2em;
  line-height: 1.2em;
  padding: 1vw;
  margin-top: 0.1vh;
  cursor: pointer;
`;
const PlayerTurnModalSection = styled.section`
  color: black;
  font-size: 1.2em;
  line-height: 1.2em;
  padding: 1vw;
  margin-top: 0.1vh;
`;

