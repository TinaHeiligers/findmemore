import styled, { css } from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 100vw;
  grid-template-rows: 17vh 14vh 60vh 10vh;
`;

const PlayerWrapper = styled.div`
  grid-row: 1;
  grid-column: 1;
  background-color: red;
`;
const gameComponents = {
  GameWrapper,
  PlayerWrapper,
};
export default gameComponents;
