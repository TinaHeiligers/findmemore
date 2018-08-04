import React from 'react';
import styled from 'styled-components';

export const GameOverModal = ({ handleClose, winningNames }) => {
  const message = `Well done ${ winningNames }, you won!`;
  return (
    <ModalDiv>
      <GameOverModalSection onClick={ handleClose }>
        <GameOverMessageDiv>Game over!</GameOverMessageDiv>
        <GameOverWinnerDiv>{ message }</GameOverWinnerDiv>
      </GameOverModalSection>
    </ModalDiv>
  );
};
export const SwitchPlayerTurnsModal = ({ handleClose, nextPlayerName }) => {
  const nextPlayerMessage = `It's your turn ${nextPlayerName}.`;
  const messageInfo = `Click anywhere to start your turn.`;
  return (
    <ModalDiv>
      <PlayerTurnModalSection onClick={ handleClose }>
        <NextPlayerMessageDiv>{ nextPlayerMessage }</NextPlayerMessageDiv>
        <NextPlayerMessageInfoDiv>{ messageInfo }</NextPlayerMessageInfoDiv>
      </PlayerTurnModalSection>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  display: block;
  position: fixed;
  top: 18vh;
  left: 4.5vw;
  width: 91vw;
`;

  // background: #fcfcdf6e;
  // border-radius: 10px;
  // border: 3px solid black;

const GameOverModalSection = styled.section`
  color: black;
  font-size: 1.2em;
  margin-top: 0.1vh;
  cursor: pointer;
  filter: drop-shadow(2px 2px 5px #D4AF37);
`;
const PlayerTurnModalSection = styled.section`
  color: black;
  font-size: 1.2em;
  margin-top: 0.1vh;
`;
const NextPlayerMessageDiv = styled.div`
  font-family: Dosis, sans-serif;
  font-weight: 600;
  font-size: 1.2em;
  text-align: center;
  @media (min-width: 1366px) {
    font-size: 2.2em;
  }
`;
const NextPlayerMessageInfoDiv = styled.div`
  font-size: 0.8em;
  text-align: center;
  @media (min-width: 1366px) {
    font-size: 1.8em;
  }
`;
const GameOverMessageDiv = styled.div`
  text-align: center;
  @media (min-width: 1366px) {
    font-size: 1.8em;
  }
`;
const GameOverWinnerDiv = styled.div`
  font-family: Dosis, sans-serif;
  font-weight: 600;
  font-size: 1.2em;
  text-align: center;
  @media (min-width: 1366px) {
    font-size: 2.2em;
  }
`;
