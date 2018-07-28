import styled from 'styled-components';
// TODO: make the Wrappers shared.
const StartPageWrapper = styled.div`
  /*font-family: 'Raleway', 'sans-serif';*/
  box-shadow: 0 0 2vw black;
  position: absolute;
  top: 4%;
  left: 3%;
  bottom: 4%;
  right: 3%;
  border-radius: 3vw;
  background-color: #99887794;
  min-width: 50%;
  min-height: 50%;
`;
const StartPageMainDivH1 = styled.h1`
  margin-top: 4vh;
  /*font-family: 'Raleway','sans-serif';*/
  text-align: center;
  font-size: 4em;
  color: hsla(112,79%,6%,1);
`;
const StartPageMainDivH2 = styled.h2`
  margin-top: 2vh;
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  color: hsla(119,3%,10%,1);
`;
const StartPageP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  margin-top: 2vh;
  font-weight: bold;
  color: hsla(120, 44%, 7%, 1);
`;
const StartPageP2 = styled.p.attrs({
  fontSize: props => props.size || '2em',
})`
  margin-top: 2vh;
  font-size: 1em;
  color: hsl(120, 44%, 11%);
`;
const StartFormDiv = styled.div`
  text-align: center;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
})`
  width: 50%;
  text-align: center;
  font-size: 1.5em;
  border: 3px solid #b0a293;
  margin: 1.0vh;
  /* padding: 2.2vh 5vw; */
  border-radius: 1vw;
  border-style: double;
  &:focus {
    outline: none;
  }
`;
const ButtonDiv = styled.div`
  font-size: 1em;
  text-align: center;
  position: absolute;
  bottom: 10vh;
  width: 100%;
`;
const ButtonAddMe = styled.button.attrs({
  type: 'Submit',
})`
  text-align: center;
  font-size: 1.5em;
  border: 3px solid #100f0d;
  width: 20%;
  border-radius: 1vw;
  outline: none;
  // font-family: 'Merriweather',serif;
  cursor: pointer;
  text-shadow: #b0a293 0 0 1px;
  background: linear-gradient(white,#b0a293);
  &:focus, &:hover {
    background: linear-gradient(#b0a293, white);
  }
`;
const Button = styled.button`
  text-align: center;
  border-radius: 10px;
  border: none;
  /* padding: 1.5vh 4vw; */
  font-size: 1.5em;
  outline: none;
  /*font-family: 'Raleway','sans-serif';*/
  /* margin: 1vw; */
  cursor: pointer;
  border-style: solid;
`;
const ButtonEasy = Button.extend`
  background: linear-gradient(#6fa579,#046d04);
  outline: none;
  /* margin: 1vw; */
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  color: hsla(100, 100%, 2%, 1);
  &:focus, &:hover {
    background: linear-gradient(#046d04, #6fa579);
  }
`;
const ButtonMedium = Button.extend`
  background: linear-gradient(#ff8c00,#cd6600);
  outline: none;
  color: hsl(30,97%,0%);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(#cd6600, #ff8c00);
  }
`;
const ButtonHard = Button.extend`
  background: linear-gradient(#ff0000,#8b0000);
  outline: none;
  color: hsla(20,93%,2%,1);
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus, &:hover {
    background: linear-gradient(#8b0000, #ff0000);
  }
`;
const components = {
  StartPageWrapper,
  StartPageMainDivH1,
  StartPageMainDivH2,
  StartPageP,
  StartPageP2,
  StartFormDiv,
  Button,
  ButtonAddMe,
  ButtonDiv,
  ButtonEasy,
  ButtonHard,
  ButtonMedium,
  InputWithProps
};
export default components;
