import styled from 'styled-components';

const GameWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  max-width: 1310px;
  margin: 0 auto;
  grid-template-columns: 100%;
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
