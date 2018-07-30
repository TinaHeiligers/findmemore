import styled from 'styled-components';
import animalTracks from 'redux/cards/images/animaltracks-pattern.jpg';
const GameStatusWrapper = styled.div`
  background-image: url(${animalTracks});
  grid-row: 1;
  grid-column: 1;
  left: 0;
  bottom: 0;
  margin: 10px 10px;
  border: 1px solid gold;
  filter: drop-shadow(2px 2px 5px #D4AF37);
  border-radius: 10px;
`;
const GameStatusDiv = styled.div`
  color: black;
  text-align: center;
  font-size: 1.3em;
  margin-top: 2vh;
`;
const GameStatusButtonDiv = styled.div`
  text-align: center;
  font-size: 1em;
  position: 'inline-flex';
`;
const Button = styled.button`
  text-align: center;
  border-radius: 10px;
  border: none;
  font-size: 1.0em;
  outline: none;
  cursor: pointer;
  border-style: solid;
`;
const ButtonEasy = Button.extend`
  background: linear-gradient(hsla(131, 23%, 54%, 0.5),hsla(120, 93%, 22%, 0.5));
  outline: none;
  color: hsla(100, 100%, 2%, 1);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  min-width: 10vw;
  max-width: 20vw;
  &:focus, &:hover {
    background: linear-gradient(hsla(120, 93%, 22%, 0.5),hsla(131, 23%, 54%, 0.5));
  }
`;
const ButtonMedium = Button.extend`
  background: linear-gradient(hsla(33, 100%, 50%, 0.5),hsla(30, 100%, 40%, 0.5));
  outline: none;
  color: hsl(30, 97%, 0%);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  min-width: 10vw;
  max-width: 20vw;
  &:focus, &:hover {
    background: linear-gradient(hsla(30, 100%, 40%, 0.5), hsla(33, 100%, 50%, 0.5));
  }
`;
const ButtonHard = Button.extend`
  background: linear-gradient(hsla(0, 100%, 50%, 0.5),hsla(0, 100%, 27%, 0.5));
  outline: none;
  color: hsla(20, 93%, 2%, 1);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  min-width: 10vw;
  max-width: 20vw;
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
