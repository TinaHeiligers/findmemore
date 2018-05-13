import React from 'react';
import { ImmutableFragment } from 'redux-little-router';
import styled from 'styled-components';
import Help from 'components/help.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import GameLayout from 'components/game/gameLayout.jsx';
import img from 'redux/cards/images/table.jpg';

const App = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-size: cover;
`;
export default () =>
  <App>
    <ImmutableFragment forRoute='/startPage'>
      <StartPage />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/game'>
      <GameLayout />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/help'>
      <Help />
    </ImmutableFragment>
  </App>;
