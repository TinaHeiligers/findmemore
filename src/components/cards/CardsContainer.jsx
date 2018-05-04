import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';
import components from 'components/cards/components.jsx'; // path in imports is relative to src.
import { GameOverDiv } from 'components/game/components.js';//src/components/game/components.js
const CardsMainContainerDiv = components.CardsMainContainerDiv;
const CardContainer = components.CardContainer;
const CardDiv = components.CardGameLevelDiv;
const CardFaceFrontDiv = components.CardFaceFrontDiv;
const CardNameDiv = components.CardNameDiv;
const CardFaceBackDiv = components.CardFaceBackDiv;
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.array,
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
  };
  handleClick(e, card) {
    e.preventDefault();
    console.log('Card clicked:', card.name)
    if(card.matched) {
      return;
    }
    console.log('Issue actions creators selectedCard(card), selectedCardsCheck()', card)
    //TODO: action creators for these events:
    // this.props.selectCard(card);
    // this.props.selectedCardsCheck();
  };
  // cardDiv: always have card, in addition, if it is selected add the transform. If it is matched add a different transform
  renderCards(card, idx) => {
    return(
      <CardContainer key={idx} name="selected" value={card.selected} onClick={(e) => this.handleClick(e, card)}>
        <CardDiv selected={card.selected} matched={card.matched}>
          <CardFaceFrontDiv>
            <CardNameDiv>{card.name}</CardNameDiv>
          </CardFaceFrontDiv>
          <CardFaceBackDiv></CardFaceBackDiv>
        </CardDiv>
      </CardContainer>
    )
  };
  render() {
    const gameLevel = this.props.gameLevel;
    const gameState = this.props.gameState;
    if (!this.props.cards) {
      return 'No cards Loaded'
    }
    return(
      <CardsMainContainerDiv>
      <GameOverDiv gameState={gameState}>
          <div>{gameState === 'over' ? "GAME OVER! " : ""}</div>
      </GameOverDiv>
        {this.props.cards.map(this.renderCards)}
      </CardsMainContainerDiv>
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
