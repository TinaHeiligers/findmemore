import styled, { css } from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 84vw 16vw;
  grid-template-rows: 75vh 25vh;
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
