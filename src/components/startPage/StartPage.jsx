import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Immutable from 'immutable';
import components from 'components/startPage/components.js'; // path in imports is relative to src.
const StartPageWrapper = components.StartPageWrapper;
const StartPageMainDivH1 = components.StartPageMainDivH1;
const StartPageMainDivH2 = components.StartPageMainDivH2;
const StartPageP = components.StartPageP;
const StartFormDiv = components.StartFormDiv;
const ButtonDiv = components.ButtonDiv;
const InputWithProps = components.InputWithProps;
const ButtonAddMe = components.ButtonAddMe;
const ButtonEasy =components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
// REDUX
import playersActions from 'redux/player/playerActions';
import gameActions from 'redux/game/gameActions';
const { addPlayer } = playersActions;
const { startGame } = gameActions;
const theme = {
  font: 'Tahoma',
  color: 'red',
  fontSize: '20px',
}
class StartPage extends Component {
  static propTypes = {
    players: PropTypes.instanceOf(Immutable.List),
    addPlayer: PropTypes.func,
  };
   message(num) {
    switch (num) {
      case 1:
        return "Add another player";
      case 2:
        return "We're all set! Click a button to start:";
      default:
        return "Please add your name to start playing!";
    }
  }
  handleCreatePlayer(event) {
    event.preventDefault();
    if (this.props.players.size < 2) {
      this.props.addPlayer(this.name.value);
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
      <StartPageWrapper>
        <ThemeProvider theme={ theme }>
          <StartPageMainDivH1>
            Find Me
          </StartPageMainDivH1>
        </ThemeProvider>
        <StartPageMainDivH2>
          Find my matching partner in all the cards!
        </StartPageMainDivH2>
        <StartFormDiv>
        { players && players.map((player, index) => <StartPageP key={ index } size='2em'>Welcome { player.get('name') }!</StartPageP>) }
          <StartPageP>{ this.message(players.size) }</StartPageP>
          { players.size === 2 ?
            <div></div> :
            <form
              ref={ input => this.playerForm = input }
              onSubmit={ e => this.handleCreatePlayer(e) }>
              <InputWithProps
                innerRef={ input => this.name = input }/>
              <div>
                <ButtonAddMe>add me</ButtonAddMe>
              </div>
            </form>
          }
        </StartFormDiv>
        { players.size ?
          <ButtonDiv>
            <ButtonEasy onClick={ () => this.startGame('easy') }>easy</ButtonEasy>
            <ButtonMedium onClick={ () => this.startGame('medium') }>medium</ButtonMedium>
            <ButtonHard onClick={ () => this.startGame('hard') }>hard</ButtonHard>
          </ButtonDiv> :
          <ButtonDiv />
        }
      </StartPageWrapper>
    )
  }
}
export default connect(
  state => ({
    players: state.getIn(['players', 'all']),
    gameState: state.getIn(['game', 'state']),
    router: state.get('router'),
}),
  { addPlayer, startGame })(StartPage);
