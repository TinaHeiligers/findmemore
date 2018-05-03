import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const flexHash = {
  'easy':'1 1 25%',
  'medium':'1 1 16.6%',
  'hard':'1 1 12.5%',
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
const components = {
  CardsDiv,
  CardsWrapper,
};
export default components;
