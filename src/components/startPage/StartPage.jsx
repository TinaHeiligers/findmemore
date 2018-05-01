import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';
import components from 'components/startPage/components.js'; // path in imports is relative to src.
const StartPageWrapper = components.StartPageWrapper;
const StartPageMainDivH1 = components.StartPageMainDivH1;
const StartPageMainDivH2 = components.StartPageMainDivH2;
const StartPageP = components.StartPageP;
const StartFormDiv = components.StartFormDiv;
const ButtonDiv = components.ButtonDiv;
const InputWithProps = components.InputWithProps;
const ButtonAddMe = components.ButtonAddMe
const Button = components.Button;
const ButtonEasy =components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
// REDUX
import playersActions from 'ducks/player/playerActions';
const { addPlayer, welcomePlayer } = playersActions;
const theme = {
  font: 'Tahoma',
  color: 'red',
  fontSize: '20px',
}
class StartPage extends Component {
  static propTypes = {
    players: PropTypes.array,
    message: PropTypes.string,
    addPlayer: PropTypes.func,
  };
   message(num) {
    if (num < 1) {
      return "Please add your name to start playing!"
    } else if (num < 2) {
      return "Add another player or press button to start"
    } else if (num === 2) {
      return "We're all set!"
    } else {
      return ""
    }
  }
  handleCreatePlayer(event) {
    event.preventDefault();
    if (this.props.players.length < 2) {
      this.props.addPlayer(this.name.value);
      this.playerForm.reset();
      }
    else {
      return null
    }
  }
  startGame(level) {
    this.props.startGame(level);
    let message;
    switch(level) {
      case 'easy':
        message = 'Start an easy game';
        break;
      case 'medium':
        message = 'Start a medium game';
        break;
      case 'hard':
        message = 'Start a hard game';
        break;
      default:
        break;
    }
    console.log(message);
    return message;
  }

  render() {
    const players = this.props.players;
    return (
      <StartPageWrapper>
      <ThemeProvider theme={theme}>
        <StartPageMainDivH1>
          Find Me
        </StartPageMainDivH1>
        </ThemeProvider>
        <StartPageMainDivH2>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartFormDiv>
          <StartPageP>{this.message(players.length)}</StartPageP>
          { players.length === 2 ?
            <div></div> :
            <form
              ref={(input) => this.playerForm = input}
              onSubmit={ (e) => this.handleCreatePlayer(e) }>
              <InputWithProps
                innerRef={(input) => this.name = input}/>
            <div>
              <ButtonAddMe>Add Me</ButtonAddMe>
            </div>
          </form>
          }
        </StartFormDiv>
        { players.length ? <div>{this.props.welcomePlayer(players[0])}</div> : 'Um.....'}
        {players.length ?
          <ButtonDiv>
          <ButtonEasy onClick={() => this.startGame('easy')}>easy</ButtonEasy>
          <ButtonMedium onClick={() => this.startGame('medium')}>medium</ButtonMedium>
          <ButtonHard onClick={() => this.startGame('hard')}>hard</ButtonHard>
        </ButtonDiv> :
        <ButtonDiv />
        }
      </StartPageWrapper>
    )
  }
}
export default connect(
  state => ({
    players: state.players.all,
    message: state.players.message,
}),
  { addPlayer, welcomePlayer })(StartPage);
