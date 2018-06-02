import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CardsContainer from 'components/cards/CardsContainer';
import GameStatusContainer from 'components/gameStatus/GameStatusContainer';
import PlayerStatusContainer from 'components/playerStatus/PlayerStatusContainer';
import gameComponents from 'components/game/gameComponents';
import gameOverModal from 'components/shared/Modal'; // TODO: create this
import gameActions from 'redux/game/gameActions';
import { GAME_STATE } from 'redux/game/gameReducer';

import sharedActions from 'redux/shared/sharedActions';

const GameWrapper = gameComponents.GameWrapper;
const { startNextTurn } = gameActions;
const { showModal, hideModal } = sharedActions;

class GameContainer extends Component {
  static propTypes = {
    gameState: PropTypes.string,
    startNextTurn: PropTypes.func,
    modalVisible: PropTypes.bool,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  };
  watchClick(e) {
    e.preventDefault();
    if (GAME_STATE.get('switchTurns') === this.props.gameState) {
      this.props.startNextTurn()
    }
    if (GAME_STATE.get('over') === this.props.gameState) {
      if (this.props.modalVisible) {
        this.props.hideModal();
      } else {
        this.props.showModal();
      }
    }
  }
  render() {
    return (
      <GameWrapper onClick={ (e) => this.watchClick(e) }>
        <CardsContainer />
        <GameStatusContainer />
        <PlayerStatusContainer />
      </GameWrapper>
    );
  }
}
export default connect(
  state => ({
    gameState: state.getIn(['game', 'state']),
    modalVisible: state.getIn(['shared', 'modalVisible']),
  }), { startNextTurn, showModal, hideModal })(GameContainer);
