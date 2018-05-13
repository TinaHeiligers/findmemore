import React from 'react';
import { ImmutableFragment, ImmutableLink } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';

import Help from 'components/help.jsx';
import Bar from 'components/Bar.jsx';
import Counter from 'components/counter/counter.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import GameLayout from 'components/game/gameLayout.jsx';
import List from 'components/shared/List.jsx';
import ListItem from 'components/shared/ListItem.jsx';

import themes from 'components/themes.js';

const Content = styled.div`
  /*padding: 1vh;*/
`;
export default () =>
  <Content>
    <ImmutableFragment forRoute='/counter'>
      <Counter />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/startPage'>
      <StartPage />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/game'>
      <GameLayout />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/help'>
      <Help />
    </ImmutableFragment>
    <ImmutableFragment forRoute='/bar'>
      <Bar />
    </ImmutableFragment>
  </Content>;
