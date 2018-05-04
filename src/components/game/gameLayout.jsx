import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Fragment } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';
import components from 'components/game/components.js'; // path in imports is relative to src.
const GameWrapper = components.GameWrapper;
const GameStatus = components.GameStatus;
const CardsWrapper = components.CardsWrapper;
const PlayerWrapper = components.PlayerWrapper;

export default () =>
    <GameWrapper>
      <CardsContainer></CardsContainer>
      <GameStatusContainer></GameStatusContainer>
      <PlayerStatusContainer></PlayerStatusContainer>
    </GameWrapper>

class CardsContainer extends Component {
  render() {
    return(
      <CardsWrapper>
        CARDS
      </CardsWrapper>
    )
  }
};
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
