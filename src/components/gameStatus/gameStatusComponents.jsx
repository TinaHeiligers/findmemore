import styled from 'styled-components';
const GameStatusWrapper = styled.div`
    grid-row: 3;
    grid-column: 1;
`;
const GameStatusDiv = styled.div`
  color: black;
  text-align: center;
  font-size: 1.3em;
`;
const GameStatusButtonDiv = styled.div`
  text-align: center;
  font-size: 1em;
  margin-top: 2.5vh;
  position: inline-flex;
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
