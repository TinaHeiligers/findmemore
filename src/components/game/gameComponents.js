import styled, { css } from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 70vh 30vh;
`;

const PlayerWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  background-color: red;
`;
const gameComponents = {
  GameWrapper,
  PlayerWrapper,
};
export default gameComponents;
