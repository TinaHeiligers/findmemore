import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PlayerStatusComponents from 'components/PlayerStatus/playerStatusComponents.jsx';
const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;
const CardsRemainingSpan = PlayerStatusComponents.CardsRemainingSpan;
class PlayerStatusContainer extends Component {
  message(player) {
    return this.props.gameState === 'inProgress' ? player.getIn(['matchedCards', 'size']) : 'Welcome!';
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
        <CardsRemainingSpan className='cards-remaining'>{ (this.props.cards.size - this.props.totalScores) }</CardsRemainingSpan>
      </PlayerStatusWrapper>
    );
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    players: state.getIn(['players', 'all']),
    totalScores: state.getIn(['players', 'totalScores']),
    currentPlayer: state.getIn(['players', 'current']),
    gameState: state.getIn(['game', 'state']),
  }), {  })(PlayerStatusContainer);
