import styled, { css } from 'styled-components';
import cardBackImage from 'redux/cards/images/card-back.png';
const CardsWrapper = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;
const CardDiv = styled.div`
  background-image: url(${props => props.image});
  background-color: white;
  background-size: cover;
  border-radius: 10px;
  border: 1px solid goldenrod;
  filter: drop-shadow(2px 2px 5px #B8860B);

`
const CardsComponents = {
  CardsWrapper,
  CardDiv,
};
export default CardsComponents;
