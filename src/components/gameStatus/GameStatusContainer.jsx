import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import gameActions from 'redux/game/gameActions';
const { startGame } = gameActions;
import styled, { ThemeProvider } from 'styled-components';
import GameStatusComponents from 'components/gameStatus/gameStatusComponents.jsx'; // path in imports is relative to src.
import components from 'components/startPage/components.js'; // path in imports is relative to src.
const ButtonDiv = components.ButtonDiv;
const ButtonEasy =components.ButtonEasy;
const ButtonMedium = components.ButtonMedium;
const ButtonHard = components.ButtonHard;
const GameStatusWrapper = GameStatusComponents.GameStatusWrapper;
const GameStatusDiv = GameStatusComponents.GameStatusDiv;
//TODO: add click events and redux action creators to handle the clicks.
class GameStatusContainer extends Component {
  render() {
    return(
      <GameStatusWrapper gameLevel={this.props.gameLevel}>
      <GameStatusDiv>Play again?</GameStatusDiv>
        <ButtonDiv>
          <ButtonEasy margin={'3px'} onClick={() => this.props.startGame('easy')}>easy</ButtonEasy>
          <ButtonMedium margin={'3px'} onClick={() => this.props.startGame('medium')}>medium</ButtonMedium>
          <ButtonHard margin={'3px'} onClick={() => this.props.startGame('hard')}>hard</ButtonHard>
        </ButtonDiv>
      </GameStatusWrapper>
    )
  }
};
export default connect(
  state => ({
    cards: state.cards.all,
    gameState: state.game.state,
    gameLevel: state.game.level,
    router: state.router,
  }), { startGame })(GameStatusContainer);
// class Game extends React.Component {
//   render() {
//     if (!this.props.gameStarted()) {
//       return null
//     }
//     return(
//       <div className="bottom bottom-left">
//         <h3 className="gamenumber">{gameName}!</h3>
//         <p className="game-restart">Play again?</p>
//         <div className="buttons-restart">
//           <button className="button-restart-easy" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>easy</button>
//           <button className="button-restart-medium" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>medium</button>
//           <button className="button-restart-hard" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>hard</button>
//         </div>
//       </div>
//       )
//   }
// }
