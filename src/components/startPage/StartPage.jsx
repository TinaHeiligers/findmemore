import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import components from 'components/startPage/components.js'; // path in imports is relative to src.
const StartPageWrapper = components.StartPageWrapper;
const StartPageMainDivH1 = components.StartPageMainDivH1;
const StartPageMainDivH2 = components.StartPageMainDivH2;
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
const { addPlayer } = playersActions;

class StartPage extends Component {
  // static propTypes = {
  //   players: PropTypes.array,
  //   savePlayers: PropTypes.func,
  // };
  message(count) {
    return count > 0 ? 'Start Game' : 'Add a player';
  }
  handleCreatePlayer(event) {
    event.preventDefault();
    console.log(this.props.players.length)
    if (this.props.players.length < 2) {
      this.props.addPlayer(this.name.value);
      this.playerForm.reset();
      }
    else {
      return null
    }
  }

  render() {
    const players = this.props.players;
    return (
      <StartPageWrapper>
        <StartPageMainDivH1>
          Find Me
        </StartPageMainDivH1>
        <StartPageMainDivH2>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartFormDiv>
          <p>{this.message(players.length)}</p>
          <form
            ref={(input) => this.playerForm = input}
            className={ players.length === 2 ? 'hidden': 'player-edit' }
            onSubmit={ (e) => this.handleCreatePlayer(e) }>
            <InputWithProps
              innerRef={(input) => this.name = input}/>
            <div className='add-me-button-container'>
              <ButtonAddMe className='add-me-button' type='Submit'>Add Me</ButtonAddMe>
            </div>
          </form>
          <br />
        </StartFormDiv>
        <ButtonDiv>
          <ButtonEasy>easy</ButtonEasy>
          <ButtonMedium>medium</ButtonMedium>
          <ButtonHard>hard</ButtonHard>
        </ButtonDiv>
      </StartPageWrapper>
    )
  }
}
export default connect(
  state => ({
    players: state.players.all,
}),
  { addPlayer })(StartPage);
