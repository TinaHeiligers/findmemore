import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import components from 'components/game/components.js'; // path in imports is relative to src.
const GameWrapper = components.GameWrapper;
// REDUX

class Game extends Component {
  static propTypes = {
    cards: PropTypes.array,
    players: PropTypes.array,
  };
  render() {
    const cards = this.props.cards;
    return (
      <GameWrapper>
      <div>Other containers go in here</div>
      {/*<CardsContainer />
      <GameProgress />
      <Players />
      <PlayerTurn />
      <GameOver />*/}
      </GameWrapper>
    )
  }
}
export default connect(
  state => ({
    players: state.players.all,
    gameStarted: state.game.started,
    gameOver: state.game.over,
    cards: state.cards.cards,
}), { })(Game);

// CARDS CONTAINER
// class CardsContainer extends component {
//   // need to connect to store
//   render() {
//     return (
//       <div>Cards get laid out here</div>
//     )
//   };
// };
// export connect(
//   state => ({
//     cards: state.cards.cards,
//   }), {})(CardsContainer);

// // GAME CONTAINER
// class GameProgress extends component {
//   // need to connect to store
//   render() {
//     return (
//       <div>Game progress goes here</div>
//     )
//   }
// };
// export connect(
//   state => ({
//     players: state.players.all,
//   }), {})(GameProgress);

// // PLAYERS Scores CONTAINER
// class Players extends component {
//   // need to connect to store
//   render() {
//     return (
//       <div>Players scores go here</div>
//     )
//   }
// };
// export connect(
//   state => ({
//     players: state.players.all,
//   }), {})(Players);

// // PLAYER TURN CONTAINER
// class PlayerTurn extends component {
//   render() {
//     return (
//       <div>Player Turn pop out goes here</div>
//     )
//   }
// };
// export connect(
//   state => ({
//     players: state.players.all,
//   }), {})(PlayerTurn)
