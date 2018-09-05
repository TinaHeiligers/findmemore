import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CardsContainer from 'components/cards/CardsContainer';
import GameStatusContainer from 'components/gameStatus/GameStatusContainer';
import PlayerStatusContainer from 'components/playerStatus/PlayerStatusContainer';
import { SwitchPlayerTurnsModal, GameOverModal } from 'components/shared/Modal';
import gameComponents from 'components/game/gameComponents';
import gameActions from 'redux/game/gameActions';
import { GAME_STATE } from 'redux/game/gameReducer';
import sharedActions from 'redux/shared/sharedActions';
const { hideModal } = sharedActions;

const GameWrapper = gameComponents.GameWrapper;
const { startNextTurn } = gameActions;

class GameContainer extends Component {
  static propTypes = {
    gameState: PropTypes.string,
    players: PropTypes.instanceOf(Immutable.List),
    currentPlayerIndex: PropTypes.number,
    startNextTurn: PropTypes.func,
    modalVisible: PropTypes.bool,
    winningNames: PropTypes.string,
    hideModal: PropTypes.func,
  };
  watchClick(e) {
    e.preventDefault();
    if (GAME_STATE.get('switchTurns') === this.props.gameState) {
      this.props.startNextTurn();
    }
  }
  showModal() {
    return this.props.gameState === GAME_STATE.get('switchTurns');
  }
  render() {
    return (
      <GameWrapper className='gameWrapper' onClick={ (e) => this.watchClick(e) }>
        { GAME_STATE.get('over') === this.props.gameState ?
          <GameStatusContainer /> : <div></div> }
        <PlayerStatusContainer />
        {
          this.showModal() &&
            <SwitchPlayerTurnsModal
              handleClose={ this.props.hideModal }
              nextPlayerName={ this.props.players.getIn([this.props.currentPlayerIndex, 'name']) }>
            </SwitchPlayerTurnsModal>
        }
        { this.props.modalVisible &&
          <GameOverModal
            handleClose={ this.props.hideModal }
            winningNames={ this.props.winningNames }>
          </GameOverModal>
        }
        <CardsContainer />
      </GameWrapper>
    );
  }
}
export default connect(
  state => ({
    gameState: state.getIn(['game', 'state']),
    players: state.getIn(['players', 'all']),
    currentPlayerIndex: state.getIn(['players', 'current']),
    modalVisible: state.getIn(['shared', 'modalVisible']),
    winningNames: state.getIn(['players', 'gameWinnerNames'])
  }), {
    startNextTurn,
    hideModal,
  })(GameContainer);
