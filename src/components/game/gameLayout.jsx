import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Fragment } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';
import CardsContainer from 'components/cards/CardsContainer.jsx';
import PlayersContainer from 'components/players/PlayersContainer.jsx';
import components from 'components/game/components.js'; // path in imports is relative to src.
const GameWrapper = components.GameWrapper;

export default () =>
    <GameWrapper>
      <CardsContainer>CARDS</CardsContainer>
      {/*<PlayersContainer />*/}
      {/*<div>PlayerTurn</div>*/}
      {/*<div>GameOver</div>*/}
    </GameWrapper>

// CARDS CONTAINER

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
