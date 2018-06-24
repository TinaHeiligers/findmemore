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
  text-align: center;
  font-size: 5vw;
  padding: 1vh;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 4vw;
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
  font-size: 2vw;
`;
const ButtonDiv = styled.div`
  text-align: center;
  font-size: 1vw;
`;
const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
  margin: props => props.size || '0.5vw',
  padding: props => props.size || '0.5vw',
})`
  outline: 'none',
  font-family: 'Baloo', sans-serif;
  text-align: center;
  font-size: 4vw;
  border: 0.5vw solid gray;
  margin: 0.5vw;
  padding: 0.5vw;
  border-radius: 2vw;
  border-style: inset;
  min-width: 50%;
  min-height: 50%
  &:focus {
    outline: none;
    background: silver;
  }
`;
const ButtonAddMe = styled.button.attrs({
  type: 'Submit',
})`
  padding: 0.5vw;
  font-size: 5vw;
  margin: 0.5vw;
  border: none;
  border-radius: 2vw;
  background: radial-gradient(white,blue);
`;
const Button = styled.button`
  font-family: 'Baloo', sans-serif;
  text-align: center;
  margin: 2vw;
  border-radius: 3vw;
  border: none;
  height: 10vh;
  width: 10vw;
  font-size: 1.5vw;

`;
const ButtonEasy = Button.extend`
  background: radial-gradient(#00e600, #006800);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus {
    background: radial-gradient(#006800, #00e600);
    color: white;
  }
`;
const ButtonMedium = Button.extend`
  background: radial-gradient(#ff8c00, #cd6600);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus {
    background: radial-gradient(#cd6600, #ff8c00);
    color: white;
  }
`;
const ButtonHard = Button.extend`
  background: radial-gradient(#ff0000, #8b0000);
  outline: none;
  margin: ${props => props.smallMargin ? props.smallMargin : '1vw'};
  &:focus {
    background: radial-gradient(#8b0000, #ff0000);
    color: white;
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
