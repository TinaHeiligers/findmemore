import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Fragment } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';
import CardsContainer from 'components/cards/CardsContainer';
import gameComponents from 'components/game/gameComponents.js'; // path in imports is relative to src.
const GameWrapper = gameComponents.GameWrapper;
const GameStatus = gameComponents.GameStatus;
const PlayerWrapper = gameComponents.PlayerWrapper;

export default () =>
    <GameWrapper>
      <CardsContainer />
      <GameStatusContainer />
      <PlayerStatusContainer />
    </GameWrapper>

// TODO: moves these into their own folders
class GameStatusContainer extends Component {
  render() {
    return(
      <GameStatus>
        GameStatus
      </GameStatus>
    )
  }
};
class PlayerStatusContainer extends Component {
  render() {
    return(
      <PlayerWrapper>
        PlayerStatus
      </PlayerWrapper>
    )
  }
};
