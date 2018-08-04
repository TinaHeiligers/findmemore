import styled from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const PlayerStatusWrapper = styled.div`
  grid-row: 1;
  grid-column: 1;
  background-image: url(${animalTracks});
  background-repeat: repeat;
  background-size: cover;
  margin: 3vh 1vw 3vh 1vw;
  padding: 1vh;
  border: 1px solid gold;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 5px #D4AF37);
`;
const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardsInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PlayerStatusListItem = styled.div`
  text-align: left;
  color: black;
`;
const PlayerNameSpan = styled.span`
  margin: 0 10px;
  font-size: 2em;
  color: hsl(120, 44%, 11%);
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;
const PlayerScoreSpan = styled.span`
  font-size: 3em;
  color: hsl(120, 44%, 11%);
  font-family: Dosis, sans-serif;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 4em;
  }
`;
const CardsInfoSpan = styled.span`
  position: relative;
  list-style: none;
  text-align: left;
  font-size: 1.2em;
  color: black;
  color: hsl(120, 44%, 6%);
`;
const CardsRemainingSpan = CardsInfoSpan.extend`
  color: hsl(120, 44%, 6%);
`;
const CardsMatchedSpan = CardsInfoSpan.extend`
  color: hsl(120, 44%, 6%);
`;

const PlayerStatusComponents = {
  PlayerStatusWrapper,
  InfoDiv,
  CardsInfo,
  PlayerStatusListItem,
  PlayerNameSpan,
  PlayerScoreSpan,
  CardsRemainingSpan,
  CardsMatchedSpan,
};
export default PlayerStatusComponents;
