import styled from 'styled-components';
import cardBackImage from 'redux/cards/images/card-back.png';
const gameLevelColumnHash = {
  'easy': 'repeat(4, 1fr)',
  'medium': 'repeat(4, 1fr)',
  'hard': 'repeat(6, 1fr)',
}
const gameLevelRowHash = {
  'easy': 'repeat(3, 1fr)',
  'medium': 'repeat(4, 1fr)',
  'hard': 'repeat(4, 1fr)',
}
const CardsWrapper = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${props => gameLevelColumnHash[props.gameLevel]};
  grid-template-rows: ${props => gameLevelRowHash[props.gameLevel]};
  grid-gap: 10px;
  padding: 10px;
`;
const CardDiv = styled.div`
  background-image: url(${props => (props.image && props.status === 'visible') ? props.image : cardBackImage});
  background-color: white;
  background-size: ${props => props.status === 'visible' ? 'cover' : null};
  background-position:center;
  border-radius: 10px;
  border: 1px solid goldenrod;
  filter: drop-shadow(2px 2px 5px #B8860B);
  &:focus {
    background-image: url(${props => props.image});
    background-size: cover;
  }
`;
const CardDivDynamic = styled.div.attrs({
  image: props => props.image,
  size: props => props.size,
})`
  background-image: url(${props => props.image});
  background-size: ${props => props.size};
  background-color: white;
  background-position:center;
  border-radius: 10px;
  border: 1px solid goldenrod;
  filter: drop-shadow(2px 2px 5px #B8860B);
`;
const CardsComponents = {
  CardsWrapper,
  CardDiv,
  CardDivDynamic,
};
export default CardsComponents;
