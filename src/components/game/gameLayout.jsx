import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import CardsContainer from 'components/cards/CardsContainer';
import GameStatusContainer from 'components/gameStatus/GameStatusContainer';
import PlayerStatusContainer from 'components/playerStatus/PlayerStatusContainer';

import gameComponents from 'components/game/gameComponents.js'; // path in imports is relative to src.
const GameWrapper = gameComponents.GameWrapper;


export default () =>
    <GameWrapper>
      <CardsContainer />
      <GameStatusContainer />
      <PlayerStatusContainer />
    </GameWrapper>

// TODO: moves these into their own folders

