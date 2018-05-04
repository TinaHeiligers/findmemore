import styled, { css } from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const PlayerStatusWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  background-image: url(${animalTracks});
  background-repeat: repeat;
  background-size: cover;
  margin: 0px 0px 0px 10px;
  padding: 1vh;
  border: 1px solid gold;
  border-right: none;
  border-bottom: none;
  border-top-left-radius: 90px;
  filter: drop-shadow(2px 2px 5px #D4AF37);
`;
const PlayerStatusListItem = styled.li`
    list-style: none;
    padding-left: 3vw;
    text-align: left;
    font-size: 6vw;
    color: #8b0000;
    text-shadow: 0.1vw 0.1vw 0 black, -0.1vw -0.1vw 0 black, 0.1vw -0.1vw 0 black, -0.1vw 0.1vw 0 black, 0.1vw 0.1vw 0 black, 0vw 0vw 1vw black;

`
const PlayerStatusComponents = {
  PlayerStatusWrapper,
  PlayerStatusListItem,
};
export default PlayerStatusComponents;
