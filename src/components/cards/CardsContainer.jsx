import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
const {
  chooseCard,
  matchCardsRequest,
  countMatchedCards,
} = cardsActions;
const { switchPlayer } = playerActions;

const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
import cardBackImage from 'redux/cards/images/card-back.png';
//TODO: add click events and redux action creators to handle the clicks.
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    players: PropTypes.instanceOf(Immutable.List),
    currentPlayerIndex: PropTypes.number,
    chooseCard: PropTypes.func,
    matchCardsRequest: PropTypes.func,
    matchedCardsCount: PropTypes.number,
    switchPlayer: PropTypes.func,
    countMatchedCards: PropTypes.func,
  };

  selectCard(e, card, index) {
    e.preventDefault();
    let currentMatchedCards = this.props.matchedCardsCount;
    const selectedCards = this.props.cards.filter(card => card.get('selected') === true);
    if (selectedCards.size === 2) {
      this.props.matchCardsRequest();
      this.props.switchPlayer();
    }
    this.props.chooseCard(index);
  }
  countMatchedCards() {
    // this method isn't returning the correct thing.
    const matchedCount = this.props.cards ? this.props.cards.reduce((acc, curr) => {
        return acc + ((curr.get('matched') === true) ? 1 : 0);
    }, 0) : 'not loaded yet';
    return matchedCount;
  }
  updateScore(currentMatchedCards) {
    const currentPlayer = this.props.players.getIn('all', this.props.currentPlayerIndex); // cards have been matched but the player score is still the same
    const updatedMatchedCards = this.props.cards.reduce((acc, curr) => {
      return acc + (curr.get('matched') === true ? 1 : 0);
    }, 0);
    if (updatedMatchedCards > currentMatchedCards) {
      this.props.updatePlayerScore();
    }
  }
  render() {
    return(
      <CardsWrapper gameLevel={ this.props.gameLevel }>
        { this.props.cards.map((card, index) => {
          return (
            <CardDivDynamic
              key={ index }
              image={ card.get('status') === 'visible' ? card.get('image') : cardBackImage }
              size={ card.get('status') === 'visible' ? 'cover' : null }
              onClick={ e => this.selectCard(e, card, index) }>
              { card.get('status') === 'visible' ? card.get('name') : '' }
            </CardDivDynamic>
            );
          }) }
      </CardsWrapper>
    );
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    matchedCardsCount: state.getIn(['cards', 'totalMatchedCards']),
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
    currentPlayerIndex: state.getIn(['players', 'current']),
    players: state.getIn(['players', 'all']),
  }), { chooseCard, matchCardsRequest, switchPlayer, countMatchedCards })(CardsContainer);

