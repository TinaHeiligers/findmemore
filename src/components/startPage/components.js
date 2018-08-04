import styled from 'styled-components';
// TODO: make the Wrappers shared.
const StartPageWrapper = styled.div`
  display: grid;
  width: 94%;
  height: 92%;
  grid-template-columns: 94vw;
  grid-template-rows: 20vh 15vh 45vh 15vh;
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
  grid-row: 1;
  font-family: Dosis, sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 5em;
  color: hsla(112,79%,6%,1);
`;
const StartPageMainDivH2 = styled.h2`
  grid-row: 2;
  text-align: center;
  padding: 0 1em;
  font-size: 1.5em;
  font-style: italic;
  color: hsla(119,3%,10%,1);
`;
const StartFormDiv = styled.div`
  text-align: center;
  grid-row: 3;
  /*margin-top: 12vh;*/
`;
const StartPageP = styled.p.attrs({
  fontSize: props => props.size || '1em',
})`
  font-weight: bold;
  font-size: 2em;
  color: hsla(120, 44%, 7%, 1);
`;
const StartPageP2 = styled.p.attrs({
  fontSize: props => props.size || '2em',
})`
  font-size: 1.5em;
  color: hsl(120, 44%, 11%);
`;

const InputWithProps = styled.input.attrs({
  type: 'text',
  placeholder: 'Player Name',
})`
  display: block;
  width: 55vw;
  text-align: center;
  font-size: 1.5em;
  border: 3px solid #b0a293;
  border-radius: 10px;
  border-style: double;
  &:focus {
    outline: none;
  }
  @media (min-width: 767px) {
    width: 41vw;
  }
`;
const ButtonDiv = styled.div`
  font-size: 1em;
  text-align: center;
  grid-row: 4;
  font-size: 1em;
  text-align: center;
`;
const ButtonAddMe = styled.button.attrs({
  type: 'Submit',
})`
  width: 30vw;
  height: auto;
  text-align: center;
  font-size: 1.5em;
  border: 3px solid #100f0d;
  padding: 0;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  text-shadow: #b0a293 0 0 1px;
  background: linear-gradient(white,#b0a293);
  &:focus, &:hover {
    background: linear-gradient(#b0a293, white);
  }
  @media (min-width: 767px) {
    width: 14vw;
  }
`;
const Button = styled.button`
  text-align: center;
  border-radius: 10px;
  border: none;
  font-size: 1.5em;
  outline: none;
  cursor: pointer;
  border-style: solid;
`;
const ButtonEasy = Button.extend`
  background: linear-gradient(#6fa579,#046d04);
  outline: none;
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
