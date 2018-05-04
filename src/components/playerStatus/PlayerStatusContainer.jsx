import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PlayerStatusComponents from 'components/PlayerStatus/playerStatusComponents.jsx';
const PlayerStatusWrapper = PlayerStatusComponents.PlayerStatusWrapper;
const PlayerStatusListItem = PlayerStatusComponents.PlayerStatusListItem;
const PlayerNameSpan = PlayerStatusComponents.PlayerNameSpan;

class PlayerStatusContainer extends Component {
  message(player) {
    return this.props.gameState === 'inProgress' ? player.matchedCards.length : 'Welcome!';
  }
  render() {
    return(
      <PlayerStatusWrapper>
          {this.props.players.map((player, index) => {
            return <PlayerStatusListItem key={index}>
              <PlayerNameSpan>{player.name}</PlayerNameSpan>
              <span>{this.message(player)}</span>
            </PlayerStatusListItem>
          })}
      </PlayerStatusWrapper>
    )
  }
};
export default connect(
  state => ({
    players: state.players.all,
    currentPlayer: state.players.current,
    gameState: state.game.state,
  }), {  })(PlayerStatusContainer);

//   class Players extends React.Component {

//   message(player) {
//     return this.props.gameStarted() ? player.matchedCards.length : "Welcome!"
//   }

//   renderPlayer(player) {
//     return(
//       <li key={player.name} className="players">
//         <span>{player.name}</span>
//         <span> {this.message(player)}</span>
//       </li>
//     )
//   }


//   render() {
//     if (!this.props.gameStarted()) {
//       return null;
//     }
//     return(
//       <div className="bottom bottom-right">
//         <ul>
//           {(this.props.players || []).map(player => this.renderPlayer(player))}
//         </ul>

//         <div>
//         <span className="cards-remaining">{(this.props.cards.length - this.props.totalScores)}</span>
//         </div>
//       </div>
//       )
//   }
// }
// export default Players;
