import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PlayerStatusComponents from 'components/PlayerStatus/playerStatusComponents.jsx';
import { SwitchPlayerTurnsModal } from 'components/shared/Modal';
import playerActions from 'redux/player/playerActions';
import { GAME_STATE } from 'redux/game/gameReducer';
import sharedActions from 'redux/shared/sharedActions';
const { hideModal } = sharedActions;

const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;
const CardsRemainingSpan = PlayerStatusComponents.CardsRemainingSpan;
const { updateTotalScores, updatePlayerScore } = playerActions;

class PlayerStatusContainer extends Component {
  // TODO add PropTypes
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    matchedCardsCount: PropTypes.number,
    players: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    totalScores: PropTypes.number,
    currentPlayerIndex: PropTypes.number,
    updateTotalScores: PropTypes.func,
    updatePlayerScore: PropTypes.func,
    hideModal: PropTypes.func,

  };
  message(player) {
    const playerScore = player.get('playerScore');
    return this.props.gameState === 'unstarted' ? 'Welcome!' : playerScore;
  }
  switchTurnMessage() {
    if (this.props.gameState === GAME_STATE.get('switchTurns')) {
      return `It's your turn ${this.props.players.getIn([this.props.currentPlayerIndex, 'name'])}, click anywhere to start your turn`;
    }
  }
  showModal() {
    return this.props.gameState === GAME_STATE.get('switchTurns');
  }
  calcCardsRemaining() {
    return `Cards remaining: ${(this.props.cards.size/2 - this.props.totalScores)}`
  }
  render() {
    return(
      <PlayerStatusWrapper>
          { this.props.players.map((player, index) => {
            return (
              <PlayerStatusListItem key={ index }>
                <PlayerNameSpan>{ player.get('name') }</PlayerNameSpan>
                <span>{ this.message(player) }</span>
              </PlayerStatusListItem>);
          }) }
        <CardsRemainingSpan className='cards-remaining'>{this.calcCardsRemaining()}</CardsRemainingSpan>
        { /* I want to move the switch player turn message to a modal that can be animated later on*/ }
        { this.showModal() &&
          <SwitchPlayerTurnsModal
            show
            handleClose={ this.props.hideModal }
            nextPlayerName={ this.props.players.getIn([this.props.currentPlayerIndex, 'name']) }>
          </SwitchPlayerTurnsModal>
        }
        <span style={ { 'fontSize': 20 } }>{ this.switchTurnMessage() }</span>
        <div style={ { 'fontSize': 20 } }>Cards matched: { this.props.matchedCardsCount/2 }</div>
      </PlayerStatusWrapper>
    );
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    matchedCardsCount: state.getIn(['cards', 'totalMatchedCards']),
    players: state.getIn(['players', 'all']),
    totalScores: state.getIn(['players', 'totalScores']),
    currentPlayerIndex: state.getIn(['players', 'current']),
    gameState: state.getIn(['game', 'state']),
    // modalVisible: state.getIn(['shared', 'modalVisible']),
  }), {
    updateTotalScores,
    updatePlayerScore,
    hideModal,
})(PlayerStatusContainer);
