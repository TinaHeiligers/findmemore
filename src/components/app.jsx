import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { replace, ConnectedRouter } from 'connected-react-router/immutable';
import styled from 'styled-components';
import Help from 'components/help.jsx';
import StartPage from 'components/startPage/StartPage.jsx';
import GameContainer from 'components/game/gameContainer';
import img from 'redux/cards/images/table.jpg';

const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
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
        <ConnectedRouter history={this.props.history}>
          <div>
            <Switch>
              <Route path='/startPage' component={StartPage} />
              <Route path='/game' component={GameContainer} />
              <Route path='/help' component={Help} />
            </Switch>
          </div>
        </ConnectedRouter>
      </AppDiv>
    );
  }
}
export default connect(null, { replace })(App);
