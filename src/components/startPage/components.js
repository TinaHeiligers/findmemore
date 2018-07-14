import styled, { css } from 'styled-components';
// TODO: make the Wrappers shared.
const StartPageWrapper = styled.div`
  font-family: 'Baloo', sans-serif;
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
  font-family: 'Baloo';
  text-align: center;
  font-size: 4vw;
  margin-top: 3vh;
  font-weight: bold;
  padding: 1vh;
  margin-bottom: 2vh;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 3vw;
  padding: 1vh;
`;
const StartPageP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  padding: 1vh 0 0.5vh 0;
  text-align: center;
`;
const StartFormDiv = styled.div`
  text-align: center;
  font-size: 2vw;
`;
const ButtonDiv = styled.div`
  text-align: center;
  font-size: 1vw;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
})`
  text-align: center;
  font-size: 2vw;
  border: 3px solid #b0a293;
  margin: 0.5vw;
  padding: 0.2vh 5vw;
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
  border-radius: 1vw;
  border: none;
  padding: 0.2vh 3vw;
  font-size: 2vh;
  outline: none;
  font-family: 'Patrick Hand';
  margin: 1vw;
  cursor: pointer;
  border-style: solid;
  text-shadow: #b0a293 0 0 1px;
  background: linear-gradient(white,#b0a293);
`;
const Button = styled.button`
  text-align: center;
  border-radius: 3vw;
  border: none;
  padding: 1.5vh 4vw;
  font-size: 3vh;
  outline: none;
  font-family: 'Baloo';
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
