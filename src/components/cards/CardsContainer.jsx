import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';
import components from 'components/cards/components.jsx'; // path in imports is relative to src.
const CardsDiv = components.CardsDiv;
const CardsWrapper = components.CardsWrapper;

class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.array,
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
  };
  // check the state to see which wrapper to render based on the number of cards we're going to show.
  render() {
    const gameLevel = this.props.gameLevel;
    if (!this.props.cards) {
      return 'No cards Loaded'
    }
    return(
      <CardsDiv>
      <CardsWrapper gameLevel={gameLevel}>
        Other stuff in here
      </CardsWrapper>
      </CardsDiv>
    )
  }
}
export default connect(
  state => ({
    cards: state.cards.all,
    gameState: state.game.state,
    gameLevel: state.game.level,
    router: state.router,
  }), { })(CardsContainer);
