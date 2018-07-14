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
  border-top-left-radius: 65px;
  filter: drop-shadow(-2px -2px 5px #D4AF37);
`;
const PlayerStatusListItem = styled.div`
    position: relative;
    line-height: 1em;
    top: 10px;
    left: 10px;
    list-style: none;
    padding-left: 3vw;
    text-align: left;
    font-size: 5vw;
    color: black;
`;
const PlayerNameSpan = styled.span`
  margin-right: 10px;
`;
const CardsInfoSpan = styled.span`
  position: relative;
  top: 2vh;
  list-style: none;
  padding-left: 3vw;
  text-align: left;
  font-size: 3vw;
  color: black;
`;
const CardsRemainingSpan = CardsInfoSpan.extend`
  left: 10px;
`;
const CardsMatchedSpan = CardsInfoSpan.extend`
  left: 30px;
`;

const PlayerStatusComponents = {
  PlayerStatusWrapper,
  PlayerStatusListItem,
  PlayerNameSpan,
  CardsRemainingSpan,
  CardsMatchedSpan,
};
export default PlayerStatusComponents;
