import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CardsContainer from 'components/cards/CardsContainer';
import GameStatusContainer from 'components/gameStatus/GameStatusContainer';
import PlayerStatusContainer from 'components/playerStatus/PlayerStatusContainer';
import gameComponents from 'components/game/gameComponents';
import gameActions from 'redux/game/gameActions';
import { GAME_STATE } from 'redux/game/gameReducer';

const GameWrapper = gameComponents.GameWrapper;
const { startNextTurn } = gameActions;

class GameContainer extends Component {
  static propTypes = {
    gameState: PropTypes.string,
    startNextTurn: PropTypes.func,
  };
  watchClick(e) {
    e.preventDefault();
    if (GAME_STATE.get('switchTurns') === this.props.gameState) {
      this.props.startNextTurn()
    }
  }
  render() {
    return (
      <GameWrapper onClick={ (e) => this.watchClick(e) }>
        { GAME_STATE.get('over') === this.props.gameState ?
          <GameStatusContainer /> : <div></div> }
        <PlayerStatusContainer />
        <CardsContainer />
      </GameWrapper>
    );
  }
}
export default connect(
  state => ({
    gameState: state.getIn(['game', 'state']),
  }), { startNextTurn })(GameContainer);
