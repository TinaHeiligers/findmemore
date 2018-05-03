import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const StartPageWrapper = styled.div`
  font-family: 'Baloo', sans-serif;
  box-shadow: 0 0 10px black;
  position: absolute;
  top:50px;
  left:50px;
  bottom:50px;
  right:50px;
  border-radius: 5px;
  background-color: #987;
  opacity: 0.7;
`;
const StartPageMainDivH1 = styled.h1`
  text-align: center;
  font-size: 6em;
  padding: 1vh;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 3em;
  padding: 1vh;
`;
const StartPageP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  padding: 1vh;
  text-align: center;
`;
const StartFormDiv = styled.div`
  text-align: center;
  font-size: 3vh;
`;
const ButtonDiv = styled.div`
  text-align: center;
  font-size: 1.5vh;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
  margin: props => props.size || '0.5em',
  padding: props => props.size || '1em',
})`
  font-family: 'Baloo', sans-serif;
  text-align: center;
  font-size: 5vh;
  border: 5px solid gray;
  margin: ${props => props.margin || '0.5em'};
  padding: ${props => props.padding || '0.5em'};
  border-radius: 10px;
  border-style: inset;
  min-width: 50%;
`;
const ButtonAddMe = styled.button.attrs({
  type: 'Submit',
})`
  font-family: 'Baloo', sans-serif;
  padding: 5px;
  padding: 1vh;
  font-size: 5vh;
  margin: 1vh;
  border-radius: 10px;
  background: blue;
  background: radial-gradient(white, blue);
  border-style: outset;
`;
const Button = styled.button`
  font-family: 'Baloo', sans-serif;
  text-align: center;
  color: black;
  margin: 25px;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  font-size: 1.5em;
`;
const ButtonEasy = Button.extend`
  background: radial-gradient(#00e600, #006800);
  border: 'green';
`;
const ButtonMedium = Button.extend`
  background: radial-gradient(#ff8c00, #cd6600);
  border: 'orange';
`;
const ButtonHard = Button.extend`
  background: radial-gradient(#ff0000, #8b0000);
  border: 'red';
`;
const components = {
  StartPageWrapper,
  StartPageMainDivH1,
  StartPageMainDivH2,
  StartPageP,
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
