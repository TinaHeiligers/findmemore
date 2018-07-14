import React from 'react';
import styled from 'styled-components';

export const GameOverModal = ({ handleClose, winningNames }) => {
  const message = `Well done ${ winningNames }, you won!`;
  return (
    <ModalDiv>
      <GameOverModalSection onClick={ handleClose }>
        <div style={ { textAlign: 'center' } }>Game over!</div>
        <div style={ { fontSize: '6vh', textAlign: 'center' } }>{ message }</div>
      </GameOverModalSection>
    </ModalDiv>
  );
};
export const SwitchPlayerTurnsModal = ({ handleClose, nextPlayerName }) => {
  const nextPlayerMessage = `It's your turn ${nextPlayerName}, click anywhere to start your turn`;
  return (
    <ModalDiv>
      <PlayerTurnModalSection onClick={ handleClose }>
        <div style={ { fontSize: '6vh', textAlign: 'center' } }>{ nextPlayerMessage }</div>
      </PlayerTurnModalSection>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 29%;
  left: 5%;
  width: 90%;
  background: #fcfcdf6e;
  border-radius: 25px;
  border: 3px solid black;
`
const GameOverModalSection = styled.section`
  color: black;
  font-size: 6vh;
  line-height: 6vh;
  padding: 2vw;
  margin-top: 0.1vh;
  cursor: pointer;
`;
const PlayerTurnModalSection = styled.section`
  color: black;
  font-size: 6vh;
  line-height: 6vh;
  padding: 2vw;
  margin-top: 0.1vh;
`;

