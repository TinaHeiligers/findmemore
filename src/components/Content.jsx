import React from 'react';
import { Fragment, Link } from 'redux-little-router';
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
  padding: 1vh;
`;
export default () =>
  <Content>
    <Fragment forRoute='/counter'>
      <Counter />
    </Fragment>
    <Fragment forRoute='/startPage'>
      <StartPage />
    </Fragment>
    <Fragment forRoute='/game'>
      <GameLayout />
    </Fragment>
    <Fragment forRoute='/help'>
      <Help />
    </Fragment>
    <Fragment forRoute='/bar'>
      <Bar />
    </Fragment>
  </Content>;
