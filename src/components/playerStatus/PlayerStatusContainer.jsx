import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PlayerStatusComponents from 'components/PlayerStatus/playerStatusComponents.jsx';
// import playerActions from 'redux/player/playerActions';
const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;
const CardsRemainingSpan = PlayerStatusComponents.CardsRemainingSpan;

class PlayerStatusContainer extends Component {
  // TODO add PropTypes
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    matchedCardsCount: PropTypes.number,
    players: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    totalScores: PropTypes.number,
    currentPlayerIndex: PropTypes.number,
  };
  message(player) {
    const playerScore = player.get('playerScore');
    return this.props.gameState === 'inProgress' ? playerScore : 'Welcome!';
  }

  render() {
    const currentPlayerIndex = this.props.currentPlayerIndex;
    const currentMatchedCards = this.props.matchedCardsCount;
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
        <div style={ { 'fontSize': 20 } }>{ this.props.matchedCardsCount }</div>
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
  }), { })(PlayerStatusContainer);
