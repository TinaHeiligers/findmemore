import styled from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const GameStatusWrapper = styled.div`
  grid-row: 2;
  grid-column: 1;
  background-image: url(${animalTracks});
  background-repeat: repeat;
  background-size: cover;
  color: #660000;
  left: 0;
  bottom: 0;
  margin: 0px 10px 0px 0px;
  border: 1px solid gold;
  filter: drop-shadow(2px -2px 5px #D4AF37);
  border-top-right-radius: 65px;
  border-bottom: none;
  border-left: none;
  padding: 1vh;
`;
const GameStatusDiv = styled.div`
  color: black;
  text-align: center;
  margin-top: 0.1vh;
  font-size: 5vw;
`;
const GameStatusButtonDiv = styled.div`
  text-align: center;
  font-size: 1vw;
  position: 'inline-flex';
  margin: 5vh 0px;
`;
const Button = styled.button`
  text-align: center;
  border-radius: 3vw;
  border: none;
  padding: 0.5vh 3vw;
  font-size: 2vh;
  outline: none;
  font-family: 'Baloo';
  margin: 1vw;
  cursor: pointer;
  border-style: solid;
  /*text-shadow: white 0 0 1px;*/

`;
const ButtonEasy = Button.extend`
  background: linear-gradient(#6fa579,#046d04);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(#046d04, #6fa579);
  }
`;
const ButtonMedium = Button.extend`
  background: linear-gradient(#ff8c00, #cd6600);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(#cd6600, #ff8c00);
  }
`;
const ButtonHard = Button.extend`
  background: linear-gradient(#ff0000, #8b0000);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(#8b0000, #ff0000);
  }
`;
const GameStatusComponents = {
  GameStatusWrapper,
  GameStatusDiv,
  GameStatusButtonDiv,
  Button,
  ButtonEasy,
  ButtonMedium,
  ButtonHard,
};
export default GameStatusComponents;
