import styled from 'styled-components';
import cardBackImage from 'redux/cards/images/card-back.png';
const gameLevelColumnHash = {
  'easy': 'repeat(4, 1fr)',
  'medium': 'repeat(4, 1fr)',
  'hard': 'repeat(6, 1fr)',
};
const gameLevelRowHash = {
  'easy': 'repeat(3, 1fr)',
  'medium': 'repeat(4, 1fr)',
  'hard': 'repeat(4, 1fr)',
};
const CardsWrapper = styled.div`
  grid-row: 3;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${props => gameLevelColumnHash[props.gameLevel]};
  grid-template-rows: ${props => gameLevelRowHash[props.gameLevel]};
  grid-gap: 3% 1.5%;
  padding: 0vh 3vw 0vh 3vw;
`;
const CardDivDynamic = styled.div.attrs({
  image: props => props.image,
  status: props => props.status,
})`
  background-image: url(${props => props.image});
  background-repeat: ${props => props.status === 'visible' ? 'no-repeat' : 'repeat' };
  background-size: ${props => props.status === 'visible' ? 'contain' : null};
  background-color: white;
  background-position:center;
  border-radius: 10px;
  border: 1px solid goldenrod;
  filter: drop-shadow(2px 2px 5px #B8860B);
`;
const CardsComponents = {
  CardsWrapper,
  CardDivDynamic,
};
export default CardsComponents;
