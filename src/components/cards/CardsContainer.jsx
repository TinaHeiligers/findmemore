import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import CardsComponents from 'components/cards/components.jsx'; // path in imports is relative to src.
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDiv = CardsComponents.CardDiv;
//TODO: add click events and redux action creators to handle the clicks.
class CardsContainer extends Component {
  render() {
    return(
      <CardsWrapper gameLevel={this.props.gameLevel}>
        {this.props.cards.map((card, id) => {
          return <CardDiv image={card.image} key={id}>{card.name}</CardDiv>
        })}
      </CardsWrapper>
    )
  }
};
export default connect(
  state => ({
    cards: state.cards.all,
    gameState: state.game.state,
    gameLevel: state.game.level,
    router: state.router,
  }), { })(CardsContainer);
