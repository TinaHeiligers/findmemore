import styled, { css } from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 100vw;
  grid-template-rows: 70vh 15vh 15vh;
`;

const PlayerWrapper = styled.div`
  grid-row: 2;
  grid-column: 1;
  background-color: red;
`;
const gameComponents = {
  GameWrapper,
  PlayerWrapper,
};
export default gameComponents;
