import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from 'components/themes.js';
import components from 'components/cards/components.jsx'; // path in imports is relative to src.
import { GameOverDiv } from 'components/game/components.js';//src/components/game/components.js
const CardsDiv = components.CardsDiv;
const CardsWrapper = components.CardsWrapper;
const CardDiv = components.CardDiv;
const CardStatus = components.CardStatus;
const CardFaceFront = components.CardFaceFront;

class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.array,
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
  };
  handleClick(e, card) {
    e.preventDefault();
    console.log(card.image);
    if(card.matched) {
      console.log("already matched");
      return;
    }
    //TODO: action creators for these events:
    // this.props.selectCard(card);
    // this.props.selectedCardsCheck();
  };
    renderCards(card, idx) {
      console.log('current card:', card)
      return(
        <CardDiv key={ idx } style={{ height: '80%', width: '80%', backgroundImage: `url(${card.image})`}}>{card.name}</CardDiv>
        )
    // return(
    //   <CardDiv key={idx} name="selected" value={card.selected} onClick={(e) => this.handleClick(e, card)}>
    //     <CardStatus status={card.selected || card.matched}>
    //       <CardFaceFront img={card.image}>
    //         <div className="name">{card.name}</div>
    //       </CardFaceFront>
    //       <div className="face back"></div>
    //     </CardStatus>
    //   </CardDiv>
    //   )
  }
  // check the state to see which wrapper to render based on the number of cards we're going to show.
  render() {
    const gameLevel = this.props.gameLevel;
    const gameState = this.props.gameState;
    console.log('gameState', gameState)
    if (!this.props.cards) {
      return 'No cards Loaded'
    }
    return(
      <CardsDiv>
      <GameOverDiv gameState={gameState}>
          <div>{gameState === 'over' ? "GAME OVER! " : ""}</div>
      </GameOverDiv>
      <CardsWrapper gameLevel={gameLevel}>
        {this.props.cards.map(this.renderCards)}
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
