import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';
import components from 'components/players/components.jsx'; // path in imports is relative to src.
const PlayersWrapper = components.PlayersWrapper;

class PlayersContainer extends Component {
  render() {
    return (
      <PlayersWrapper>Players stuff goes here</PlayersWrapper>
    )
  }
}
export default connect(
  state => ({
    players: state.players.all,
    router: state.router,
  }), {})(PlayersContainer);
