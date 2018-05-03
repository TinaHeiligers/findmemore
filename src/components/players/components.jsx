import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const PlayersWrapper = styled.div`
  font-family: 'Baloo', sans-serif;
  box-shadow: 0 0 10px black;
  position: absolute;
  top:100px;
  left:50px;
  /*bottom:50px;*/
  right:50px;
  border: 2px solid blue;
  border-radius: 5px;
  /*background-color: #987;*/
  /*opacity: 0.7;*/
`;
const PlayersLayout = styled.div`
  margin: 30px;
`;
const components = {
  PlayersWrapper,
  PlayersLayout,
};
export default components;
