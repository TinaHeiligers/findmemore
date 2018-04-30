import React from 'react';
import { Fragment, Link } from 'redux-little-router';
import styled, { ThemeProvider } from 'styled-components';

import Help from 'components/help.jsx';
import Bar from 'components/Bar.jsx';
import Counter from 'components/counter/counter.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import List from 'components/shared/List.jsx';
import ListItem from 'components/shared/ListItem.jsx';

import themes from 'components/themes.js';

const Content = styled.div`
  margin: 30px;
`;
export default () =>
  <Content>
    <ThemeProvider theme = { themes.nav }>
      <List>
        <ListItem><Link href='/counter'>Async Counter</Link></ListItem>
        <ListItem><Link href='/startPage'>Game</Link></ListItem>
        <ListItem><Link href='/help'>Help</Link></ListItem>
      </List>
    </ThemeProvider>
    <hr/>
    <Fragment forRoute='/counter'>
      <Counter />
    </Fragment>
    <Fragment forRoute='/startPage'>
      <StartPage />
    </Fragment>
    <Fragment forRoute='/help'>
      <Help />
    </Fragment>
    <Fragment forRoute='/bar'>
      <Bar />
    </Fragment>
  </Content>;
