import styled, { css } from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 70vh 30vh;
`;
const CardsWrapper = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  background-color: green;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;
const GameStatus = styled.div`
  grid-row: 2;
  grid-column: 1;
  background-color: blue;
`;
const PlayerWrapper = styled.div`
  grid-row: 2;
grid-column: 2;
background-color: red;
`;
const components = {
  GameWrapper,
  CardsWrapper,
  GameStatus,
  PlayerWrapper,
};
export default components;
