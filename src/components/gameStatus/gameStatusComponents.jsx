import styled from 'styled-components';
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
  filter: drop-shadow(2px -2px 5px #D4AF37);
  border-top-right-radius: 65px;
  border-bottom: none;
  border-left: none;
  padding: 1vh;
`;
const GameStatusDiv = styled.div`
color: #8b0000;
  text-shadow:
    0.1vw 0.1vw 0 black,
    -0.1vw -0.1vw 0 black,
    0.1vw -0.1vw 0 black,
    -0.1vw 0.1vw 0 black,
    0.1vw 0.1vw 0 black,
    0vw 0vw 1vw black;
  text-align: center;
  margin-top: 0.1vh;
  font-size: 5vw;
`;
const GameStatusComponents = {
  GameStatusWrapper,
  GameStatusDiv,
};
export default GameStatusComponents;
