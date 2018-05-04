import styled, { css } from 'styled-components';
const gameStateHash = {
  'unstarted': 'none',
  'inProgress': 'none',
  'over': 'block',
};
const GameWrapper = styled.div`
  position: absolute;
  top:50px;
  left:50px;
  bottom:50px;
  right:50px;
  border-radius: 5px;
  border: 1px solid silver;
  opacity: 0.7;
`;
export const GameOverDiv = styled.div`
  display: ${props => gameStateHash[props.gameState]};
  position: relative;
  top: 50px;
  text-align: center;
  transform: rotate(-15deg);
  font-size: 3em;
`;
const components = {
  GameWrapper,
  GameOverDiv,
};
export default components;
