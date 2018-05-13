import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, ImmutableFragment } from 'redux-little-router';
import styled from 'styled-components';
import Help from 'components/help.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import GameLayout from 'components/game/gameLayout.jsx';
import img from 'redux/cards/images/table.jpg';

const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-size: cover;
`;

class App extends Component {
  componentDidMount() {
    this.props.push({ pathname: '/startPage' });
  }
  render() {
    return (
      <AppDiv>
        <ImmutableFragment forRoute='/startPage'>
          <StartPage />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/game'>
          <GameLayout />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/help'>
          <Help />
        </ImmutableFragment>
      </AppDiv>
    );
  }
}
export default connect(null, { push })(App);
