import styled from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const GameStatusWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  background-image: url(${animalTracks});
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
  margin-top: 1vh;
  font-size: 1.3vw;
`;
const GameStatusButtonDiv = styled.div`
  text-align: center;
  font-size: 1vw;
  position: 'inline-flex';
  margin: 3vh 0px;
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
  background: linear-gradient(hsla(131, 23%, 54%, 0.5),hsla(120, 93%, 22%, 0.5));
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  color: hsla(100, 100%, 2%, 1);
  &:focus, &:hover {
    background: linear-gradient(hsla(120, 93%, 22%, 0.5),hsla(131, 23%, 54%, 0.5));
  }
`;
const ButtonMedium = Button.extend`
  background: linear-gradient(hsla(33, 100%, 50%, 0.5),hsla(30, 100%, 40%, 0.5));
  outline: none;
  color: hsl(30, 97%, 0%);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(hsla(30, 100%, 40%, 0.5), hsla(33, 100%, 50%, 0.5));
  }
`;
const ButtonHard = Button.extend`
  background: linear-gradient(hsla(0, 100%, 50%, 0.5),hsla(0, 100%, 27%, 0.5));
  outline: none;
  color: hsla(20, 93%, 2%, 1);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(hsla(0, 100%, 27%, 0.5), hsla(0, 100%, 50%, 0.5));
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
