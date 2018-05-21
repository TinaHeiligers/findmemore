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
    const playerScore = player.get('playerScore');
    return this.props.gameState === 'inProgress' ? playerScore : 'Welcome!';
  }
  checkMatchedCards() {
    const matchedCount = this.props.cards ? this.props.cards.reduce((acc, curr) => {
        return acc + ((curr.get('matched') === true) ? 1 : 0);
    }, 0) : 'not loaded yet';
    return matchedCount;
  }
  render() {
    const currentPlayerScore = this.props.currentPlayer;
    const currentMatchedCards = this.checkMatchedCards();
    console.log('currentPlayerScore', currentPlayerScore)
    console.log('currentMatchedCards', currentMatchedCards)
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
        <div style={ { 'fontSize': 20 } }>{ this.checkMatchedCards() }</div>
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
