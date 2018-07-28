import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace, ImmutableFragment } from 'redux-little-router';
import styled from 'styled-components';
import Help from 'components/help.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import GameContainer from 'components/game/gameContainer';
import img from 'redux/cards/images/table.jpg';

const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1px;
  background-image: url(${img});
  background-size: cover;
`;

class App extends Component {
  componentDidMount() {
    this.props.replace({ pathname: '/startPage' });
  }
  render() {
    return (
      <AppDiv>
        <ImmutableFragment forRoute='/startPage'>
          <StartPage />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/game'>
          <GameContainer />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/help'>
          <Help />
        </ImmutableFragment>
      </AppDiv>
    );
  }
}
export default connect(null, { replace })(App);
