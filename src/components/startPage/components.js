import styled from 'styled-components';
const StartPageWrapper = styled.div`
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
  font-size: 5em;
  margin: 0;
`;
const StartPageMainDivH2 = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-top: 0;
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
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  text-align: center;
  font-size: 5vh;
  border: 2px solid palevioletred;
  margin: ${props => props.margin || '0.5em'};
  padding: ${props => props.padding || '0.5em'};
  border-radius: ${props => props.radius || '10px'}
  border-style: inset;
  min-width: 50%;
`;
const ButtonAddMe = styled.button.attrs({
  type: 'submit',
})`
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
