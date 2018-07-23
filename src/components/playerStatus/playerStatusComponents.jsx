import styled from 'styled-components';
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
  display: inline-block;
  line-height: 1em;
  top: 10px;
  left: 10px;
  list-style: none;
  padding-left: 3vw;
  text-align: left;
  font-size: 4vw;
  color: black;
`;
const PlayerNameSpan = styled.span`
  margin-right: 10px;
  color: hsl(120, 44%, 11%);
`;
const CardsInfoSpan = styled.span`
  position: relative;
  display: inline-block;
  list-style: none;
  padding-left: 3vw;
  text-align: left;
  font-size: 2vw;
  color: black;
  color: hsl(120, 44%, 6%);
`;
const CardsRemainingSpan = CardsInfoSpan.extend`
  margin-top: 2vh;
  left: 10px;
  color: hsl(120, 44%, 6%);
`;
const CardsMatchedSpan = CardsInfoSpan.extend`
  maring-top: 2vh;
  left: 30px;
  color: hsl(120, 44%, 6%);
`;

const PlayerStatusComponents = {
  PlayerStatusWrapper,
  PlayerStatusListItem,
  PlayerNameSpan,
  CardsRemainingSpan,
  CardsMatchedSpan,
};
export default PlayerStatusComponents;
