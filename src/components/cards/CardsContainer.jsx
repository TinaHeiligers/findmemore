import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import CardsComponents from 'components/cards/components.jsx'; // path in imports is relative to src.
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDiv = CardsComponents.CardDiv;
class CardsContainer extends Component {

  render() {
    console.log('cards:',this.props.cards)
    return(
      <CardsWrapper>
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
