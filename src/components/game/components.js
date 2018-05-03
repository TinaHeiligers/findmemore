import styled, { css } from 'styled-components';
const GameWrapper = styled.div`
  font-family: 'Baloo', sans-serif;
  box-shadow: 0 0 10px black;
  position: absolute;
  top:50px;
  left:50px;
  bottom:50px;
  right:50px;
  border: 2px solid blue;
  border-radius: 5px;
  /*background-color: #987;*/
  /*opacity: 0.7;*/
`;
const GameMainDivH1 = styled.h1`
  text-align: center;
  font-size: 6em;
  padding: 1vh;
`;
const GameMainDivH2 = styled.h2`
  text-align: center;
  font-size: 3em;
  padding: 1vh;
`;
const GameP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  padding: 1vh;
  text-align: center;
`;
const components = {
  GameWrapper,
  GameMainDivH1,
  GameMainDivH2,
  GameP
};
export default components;
