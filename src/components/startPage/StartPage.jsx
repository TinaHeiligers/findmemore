/* eslint-disable no-undef */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Immutable from 'immutable';
import components from 'components/startPage/components.js';
import 'components/startPage/startPage.css';
import playersActions from 'redux/player/playerActions';
import gameActions from 'redux/game/gameActions';
const StartPageWrapper = components.StartPageWrapper;
const StartPageMainDivH1 = components.StartPageMainDivH1;
const StartPageMainDivH2 = components.StartPageMainDivH2;
const StartPageP = components.StartPageP;
const StartPageP2 = components.StartPageP2;
const StartFormDiv = components.StartFormDiv;
const ButtonDiv = components.ButtonDiv;
const InputWithProps = components.InputWithProps;
const ButtonAddMe = components.ButtonAddMe;
const ButtonEasy =components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
const { addPlayer } = playersActions;
const { startGame } = gameActions;
const theme = {
  font: 'Tahoma',
  color: 'red',
  fontSize: '20px',
};
class StartPage extends Component {
  static propTypes = {
    players: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    router: PropTypes.instanceOf(Immutable.Map),
    addPlayer: PropTypes.func,
    startGame: PropTypes.func,
  };
  message(num) {
    switch (num) {
      case 1:
        return 'Add another player';
      case 2:
        return "We're all set!";
      default:
        return '';
    }
  }
  handleCreatePlayer(event) {
    event.preventDefault();
    if (this.props.players.size < 2) {
      this.props.addPlayer(this.name.value || `player ${this.props.players.size + 1}`);
      this.playerForm.reset();
      }
    else {
      return null;
    }
  }
  startGame(level) {
    this.props.startGame(level);
  }
  render() {
    const players = this.props.players;
    return (
      <StartPageWrapper className='startPageWrapper'>
        <ThemeProvider theme={ theme }>
          <StartPageMainDivH1 className='startPageMainDivH1'>
            Find Me
          </StartPageMainDivH1>
        </ThemeProvider>
        <StartPageMainDivH2 className='startPageMainDivH2'>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartFormDiv className='startFormDiv'>
        { players && players.map((player, index) => <StartPageP className='startPageP' key={ index }>Welcome { player.get('name') }!</StartPageP>) }
          <StartPageP2 className='startPageP2'>{ this.message(players.size) }</StartPageP2>
          { players.size === 2 ?
            <div></div> :
            <form
              className='inputform'
              ref={ input => this.playerForm = input }
              onSubmit={ e => this.handleCreatePlayer(e) }>
              <InputWithProps
                className='inputWithProps'
                innerRef={ input => this.name = input }/>
              <ButtonAddMe className='buttonAddMe'>Add</ButtonAddMe>
            </form>
          }
        </StartFormDiv>
        { players.size ?
          <ButtonDiv className='buttonDiv'>
            <ButtonEasy
              className='buttonEasy'
              onClick={ () => this.startGame('easy') }>
                easy
            </ButtonEasy>
            <ButtonMedium
              className='buttonMedium'
              onClick={ () => this.startGame('medium') }>
                medium
            </ButtonMedium>
            <ButtonHard
              className='buttonHard'
              onClick={ () => this.startGame('hard') }>
                hard
            </ButtonHard>
          </ButtonDiv> :
          <ButtonDiv />
        }
      </StartPageWrapper>
    );
  }
}
export default connect(
  state => ({
    players: state.getIn(['players', 'all']),
    gameState: state.getIn(['game', 'state']),
    router: state.get('router'),
}),
  { addPlayer, startGame })(StartPage);
