import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
import cardsActions from 'redux/cards/cardsActions';
const {
  chooseCard,
  matchCardsRequest,
  extractChosenCards,
  resetChosenCards,
  matchCards } = cardsActions;
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
import cardBackImage from 'redux/cards/images/card-back.png';
//TODO: add click events and redux action creators to handle the clicks.
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    chooseCard: PropTypes.func,
    resetChosenCards: PropTypes.func,
    extractChosenCards: PropTypes.func,
    matchCardsRequest: PropTypes.func
  };

  selectCard(e, card, index) {
    e.preventDefault();
    const selectedCards = this.props.cards.filter(card => card.get('selected') === true);
    if (selectedCards.size === 2) {
      this.props.matchCardsRequest();
    }
    this.props.chooseCard(index);
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
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
  }), { chooseCard, extractChosenCards, resetChosenCards, matchCards, matchCardsRequest,
     })(CardsContainer);

