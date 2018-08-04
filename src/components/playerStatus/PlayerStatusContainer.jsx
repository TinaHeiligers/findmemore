import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PlayerStatusComponents from 'components/playerStatus/playerStatusComponents.jsx';
import { SwitchPlayerTurnsModal } from 'components/shared/Modal';
import playerActions from 'redux/player/playerActions';
import { GAME_STATE } from 'redux/game/gameReducer';
import sharedActions from 'redux/shared/sharedActions';
const { hideModal } = sharedActions;

const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const InfoDiv = PlayerStatusComponents.InfoDiv;
const CardsInfo = PlayerStatusComponents.CardsInfo;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;
const PlayerScoreSpan = PlayerStatusComponents.PlayerScoreSpan;
const CardsRemainingSpan = PlayerStatusComponents.CardsRemainingSpan;
const CardsMatchedSpan = PlayerStatusComponents.CardsMatchedSpan;
const { updateTotalScores, updatePlayerScore } = playerActions;

class PlayerStatusContainer extends Component {
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
  showModal() {
    return this.props.gameState === GAME_STATE.get('switchTurns');
  }
  calcCardsRemaining() {
    return `Pairs remaining: ${(this.props.cards.size/2 - this.props.totalScores)}`;
  }
  renderPlayerScores() {
    // return ({ this.props.players.map((player, index) => {
    //         return (
    //           <PlayerStatusListItem key={ index }>
    //             <PlayerNameSpan>{ player.get('name') }</PlayerNameSpan>
    //             <span style={ { fontSize: '1.5em' } }>{ this.message(player) }</span>
    //           </PlayerStatusListItem>);
    //       }) })
    return (
      <InfoDiv>
        { this.renderPlayerScore(this.props.players.get(0), 0) }
        { this.props.players.size > 1 ? this.renderPlayerScore(this.props.players.get(1), 1) : null }
      </InfoDiv>
    );
  }
  renderPlayerScore(player, index) {
    if (index % 2 == 0) {
      return (
        <PlayerStatusListItem key={ index }>
          <PlayerNameSpan>{ player.get('name') }</PlayerNameSpan>
          <PlayerScoreSpan>{ this.message(player) }</PlayerScoreSpan>
        </PlayerStatusListItem>
      );
    } else {
      return (
        <PlayerStatusListItem key={ index }>
          <PlayerScoreSpan>{ this.message(player) }</PlayerScoreSpan>
          <PlayerNameSpan>{ player.get('name') }</PlayerNameSpan>
        </PlayerStatusListItem>
      );
    }
  }
  render() {
    return(
      <PlayerStatusWrapper>
        { this.renderPlayerScores() }
        <CardsInfo>
          {
            null
            // <CardsRemainingSpan className='cards-remaining'>{ this.calcCardsRemaining() }</CardsRemainingSpan>
            // <CardsMatchedSpan>Pairs matched: { this.props.matchedCardsCount/2 }</CardsMatchedSpan>
          }
        </CardsInfo>
        {
          this.showModal() &&
          <SwitchPlayerTurnsModal
            handleClose={ this.props.hideModal }
            nextPlayerName={ this.props.players.getIn([this.props.currentPlayerIndex, 'name']) }>
          </SwitchPlayerTurnsModal>
        }
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
  }), {
    updateTotalScores,
    updatePlayerScore,
    hideModal,
})(PlayerStatusContainer);
