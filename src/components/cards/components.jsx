import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const flexHash = {
  'easy':'1 1 25%',
  'medium':'1 1 16.6%',
  'hard':'1 1 12.5%',
};
// prob not done right.
const transformHash = {
  'selected':'rotateY(180deg) scale(1.05) translateX(-10%)',
  'matched':'rotateY(180deg) translateX(-10%);',
};
const CardsDiv = styled.div`
  top: 0;
  bottom: 25vh;
  left: 0;
  right: 0;
  position: absolute;
  padding: 1vh;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;
const CardsWrapper = styled.div`
  border: 1px solid silver;
  flex: ${props => flexHash[props.gameLevel]};
`;
const CardDiv = styled.div`
  position: relative;
  height: 33.3%; /* here */
  perspective: 800px;
  display: inline-block;
  flex: 1 1 12.5%;
`;
// the status prop in line 44 is prob wrong.
const CardStatus = styled.div`
  padding: 5%;
  width: 90%;
  height: 90%;
  position: absolute;
  transition-duration: 0.3s;
  transition-property: transform;
  transform-style: preserve-3d;
  cursor: grab;
  transform: ${props => transformHash[status]};
`;
const CardFaceFront = styled.div`
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
  background-image: ${props => url(props.image)};
`
const components = {
  CardsDiv,
  CardsWrapper,
  CardDiv,
  CardStatus,
  CardFaceFront,
};
export default components;
