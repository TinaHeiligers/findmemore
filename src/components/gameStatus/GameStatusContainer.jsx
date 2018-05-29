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
const ButtonEasy =components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
const GameStatusWrapper = GameStatusComponents.GameStatusWrapper;
const GameStatusDiv = GameStatusComponents.GameStatusDiv;
//TODO: add click events and redux action creators to handle the clicks.
class GameStatusContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    router: PropTypes.instanceOf(Immutable.Map),
  };
  render() {
    return(
      <GameStatusWrapper gameLevel={ this.props.gameLevel }>
      <GameStatusDiv>Play again?</GameStatusDiv>
        <ButtonDiv>
          <ButtonEasy margin={ '3px' } onClick={ () => this.props.startGame('easy') }>easy</ButtonEasy>
          <ButtonMedium margin={ '3px' } onClick={ () => this.props.startGame('medium') }>medium</ButtonMedium>
          <ButtonHard margin={ '3px' } onClick={ () => this.props.startGame('hard') }>hard</ButtonHard>
        </ButtonDiv>
      </GameStatusWrapper>
    )
  }
};
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
    router: state.get('router'),
  }), { startGame })(GameStatusContainer);

