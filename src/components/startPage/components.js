import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const StartPageWrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  box-shadow: 0 0 2vw black;
  position: absolute;
  top:4vh;
  left:4vw;
  bottom:4vh;
  right:4vw;
  border-radius: 3vw;
  background-color: #987;
  opacity: 0.7;
  min-width: 50%;
  min-height: 50%
`;
const StartPageMainDivH1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  text-align: center;
  font-size: 13vw;
  margin-top: 3vh;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 4vw;
  font-style: italic;
  padding-bottom: 6vh;
`;
const StartPageP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  font-size: 4vh;
  text-align: center;
`;
const StartPageP2 = styled.p.attrs({
  fontSize: props => props.size || '2em',
})`
  font-size: 3vh;
  padding: 1vh 0;
  text-align: center;
`;
const StartFormDiv = styled.div`
  text-align: center;
  font-size: 2vw;
`;
const ButtonDiv = styled.div`
  text-align: center;
  font-size: 1vw;
  position: absolute;
  bottom: 10vh;
  width: 100%;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
})`
  text-align: center;
  font-size: 2vw;
  border: 3px solid #b0a293;
  margin: 1.0vh;
  padding: 2.2vh 5vw;
  border-radius: 1vw;
  border-style: double;
  &:focus {
    outline: none;
  }
`;
const ButtonAddMe = styled.button.attrs({
  type: 'Submit',
})`
  text-align: center;
  font-size: 2vw;
  border: 3px solid #100f0d;
  margin: 1.0vw;
  padding: 2.2vh 2vw;
  border-radius: 1vw;
  outline: none;
  font-family: 'Merriweather', serif;
  cursor: pointer;
  text-shadow: #b0a293 0 0 1px;
  background: linear-gradient(white,#b0a293);
  &:focus, &:hover {
    background: linear-gradient(#b0a293, white);
  }
`;
const Button = styled.button`
  text-align: center;
  border-radius: 3vw;
  border: none;
  padding: 1.5vh 4vw;
  font-size: 3vh;
  outline: none;
  font-family: 'Raleway', sans-serif;
  margin: 1vw;
  cursor: pointer;
  border-style: solid;
  text-shadow: white 0 0 1px;

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
