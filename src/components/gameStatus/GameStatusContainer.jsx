import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import gameActions from 'redux/game/gameActions';
const { startGame } = gameActions;
import GameStatusComponents from 'components/gameStatus/gameStatusComponents.jsx';
const GameStatusButtonDiv = GameStatusComponents.GameStatusButtonDiv;
const ButtonEasy = GameStatusComponents.ButtonEasy;
const ButtonMedium = GameStatusComponents.ButtonMedium;
const ButtonHard = GameStatusComponents.ButtonHard;
const GameStatusWrapper = GameStatusComponents.GameStatusWrapper;

class GameStatusContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    router: PropTypes.instanceOf(Immutable.Map),
    startGame: PropTypes.func,
  };
  handleStartGame = (e) => {
    e.preventDefault();
    const level = e.target.name;
    this.props.startGame(level);
  }
  render() {
    return(
      <GameStatusWrapper className='gameStatusWrapper' gameLevel={ this.props.gameLevel }>
        <GameStatusButtonDiv>
          <ButtonEasy className='buttonEasy' name='easy' smallMargin={ '3px' } onClick={ this.handleStartGame }>easy</ButtonEasy>
          <ButtonMedium className='buttonEasy'  name='medium' smallMargin={ '3px' } onClick={ this.handleStartGame }>medium</ButtonMedium>
          <ButtonHard className='buttonEasy'  name='hard' smallMargin={ '3px' } onClick={ this.handleStartGame }>hard</ButtonHard>
        </GameStatusButtonDiv>
      </GameStatusWrapper>
    );
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
    router: state.get('router'),
  }), { startGame })(GameStatusContainer);

