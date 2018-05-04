import styled, { css } from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const GameStatusWrapper = styled.div`
  grid-row: 2;
  grid-column: 1;
  background-image: url(${animalTracks});
  background-repeat: repeat;
  background-size: cover;
  color: #660000;
  left: 0;
  bottom: 0;
  margin: 0px 10px 0px 0px;
  border: 1px solid gold;
  filter: drop-shadow(2px 2px 5px #D4AF37);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 90px;
  border-bottom: none;
  border-left: none;
  padding: 1vh;
`;
const GameStatusDiv = styled.div`
  text-shadow: 1px 1px 2px pink;
  text-align: center;
  margin-top: 0.1vh;
  margin-bottom: 3vh;
  font-size: 6vw;
`;
const GameStatusComponents = {
  GameStatusWrapper,
  GameStatusDiv,
};
export default GameStatusComponents;
