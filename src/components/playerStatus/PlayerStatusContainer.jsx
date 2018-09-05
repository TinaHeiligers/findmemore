import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PlayerStatusComponents from 'components/playerStatus/playerStatusComponents.jsx';
import playerActions from 'redux/player/playerActions';
const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const InfoDiv = PlayerStatusComponents.InfoDiv;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;
const PlayerScoreSpan = PlayerStatusComponents.PlayerScoreSpan;
const { updateTotalScores, updatePlayerScore } = playerActions;

class PlayerStatusContainer extends Component {
  static propTypes = {
    players: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    totalScores: PropTypes.number,
    updateTotalScores: PropTypes.func,
    updatePlayerScore: PropTypes.func,
  };
  message(player) {
    const playerScore = player.get('playerScore');
    return this.props.gameState === 'unstarted' ? 'Welcome!' : playerScore;
  }
  renderPlayerScores() {
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
      </PlayerStatusWrapper>
    );
  }
}
export default connect(
  state => ({
    players: state.getIn(['players', 'all']),
    totalScores: state.getIn(['players', 'totalScores']),
    gameState: state.getIn(['game', 'state']),
  }), {
    updateTotalScores,
    updatePlayerScore,
})(PlayerStatusContainer);
