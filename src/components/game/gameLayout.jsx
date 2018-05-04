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
      <CardsWrapper>CARDS</CardsWrapper>
      <GameStatus>GameStatus</GameStatus>
      <PlayerWrapper>PlayerStatus</PlayerWrapper>
    </GameWrapper>
