import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Fragment } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';
import CardsContainer from 'components/cards/CardsContainer';
import components from 'components/game/components.js'; // path in imports is relative to src.
const GameWrapper = components.GameWrapper;
const GameStatus = components.GameStatus;
const PlayerWrapper = components.PlayerWrapper;

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
