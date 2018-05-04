import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Fragment } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';
import CardsContainer from 'components/cards/CardsContainer';
import GameStatusContainer from 'components/gameStatus/GameStatusContainer';
import gameComponents from 'components/game/gameComponents.js'; // path in imports is relative to src.
const GameWrapper = gameComponents.GameWrapper;
const PlayerWrapper = gameComponents.PlayerWrapper;

export default () =>
    <GameWrapper>
      <CardsContainer />
      <GameStatusContainer />
      <PlayerStatusContainer />
    </GameWrapper>

// TODO: moves these into their own folders
class PlayerStatusContainer extends Component {
  render() {
    return(
      <PlayerWrapper>
        PlayerStatus
      </PlayerWrapper>
    )
  }
};
