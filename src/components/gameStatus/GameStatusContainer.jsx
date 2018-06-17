import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import gameActions from 'redux/game/gameActions';
const { startGame } = gameActions;
import styled, { ThemeProvider } from 'styled-components';
import GameStatusComponents from 'components/gameStatus/gameStatusComponents.jsx'; // path in imports is relative to src.
import components from 'components/startPage/components.js'; // path in imports is relative to src.
const ButtonDiv = components.ButtonDiv;
const ButtonEasy = components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
const GameStatusWrapper = GameStatusComponents.GameStatusWrapper;
const GameStatusDiv = GameStatusComponents.GameStatusDiv;

class GameStatusContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    router: PropTypes.instanceOf(Immutable.Map),
  };
  handleStartGame = (e) => {
    e.preventDefault();
    const level = e.target.name;
    this.props.startGame(level);
  }
  render() {
    return(
      <GameStatusWrapper gameLevel={ this.props.gameLevel }>
        <GameStatusDiv>Play again?</GameStatusDiv>
        <ButtonDiv>
          <ButtonEasy name='easy' smallMargin={ '3px' } onClick={ this.handleStartGame }>easy</ButtonEasy>
          <ButtonMedium name='medium' smallMargin={ '3px' } onClick={ this.handleStartGame }>medium</ButtonMedium>
          <ButtonHard name='hard' smallMargin={ '3px' } onClick={ this.handleStartGame }>hard</ButtonHard>
        </ButtonDiv>
      </GameStatusWrapper>
    )
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
    router: state.get('router'),
  }), { startGame })(GameStatusContainer);

