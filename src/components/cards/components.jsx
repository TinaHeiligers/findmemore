import styled, { css } from 'styled-components';
import cardBackImage from 'redux/cards/images/card-back.png';
const flexHash = {
  'easy':'1 1 25%',
  'medium':'1 1 16.6%',
  'hard':'1 1 12.5%',
};
const selectedHash = {
  'true': 'rotateY(180deg) scale(1.05) translateX(-10%)';
  'false': '';
}
const matchedHash = {
  'true': 'transform: rotateY(180deg) translateX(-10%)';
  'false': ''
}
const transfromHash = (selected, matched) => {
  if (selected) {
    return 'rotateY(180deg) scale(1.05) translateX(-10%)';
  } else if (matched) {
    return 'transform: rotateY(180deg) translateX(-10%)';
  } else {
    return null;
  }
};
const CardsMainContainerDiv = styled.div`
  position: relative;
  height: 33.3%;
  perspective: 800px;
  display: inline-block;
`;
const CardContainer = styled.div`
  position: relative;
  height: 33.3%;
  perspective: 800px;
  display: inline-block;
`;
const CardDiv = styled.div`
  padding: 5%;
  width: 90%;
  height: 90%;
  position: absolute;
  transition-duration: 0.3s;
  transition-property: transform;
  transform-style: preserve-3d;
  cursor: grab;
  transform: ${props => transformHash(props.selected, props.matched)};
`;
const CardFaceFrontDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-width: 0.1%;
  border-color: white;
  border-style: solid;
  background-color: white;
  box-shadow: 0 0 3px black;
  overflow: hidden;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
  background-image: `url(${props => props.image})`;
`;
const CardNameDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
  opacity: 0.8;
  font-family: 'Baloo', sans-serif;
  text-shadow: 0 0 2px black;
`;
const CardFaceBackDiv = styled.div`
  background-image: url(${cardBackImage});
  background-repeat: repeat;
  background-size: unset;
  `
const components = {
  CardsMainContainerDiv,
  CardContainer,
  CardDiv,
  CardFaceFrontDiv,
  CardNameDiv,
  CardFaceBackDiv,
};
export default components;
