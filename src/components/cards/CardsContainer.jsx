import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
import cardsActions from 'redux/cards/cardsActions';
const { chooseCard } = cardsActions;
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
import cardBackImage from 'redux/cards/images/card-back.png';
//TODO: add click events and redux action creators to handle the clicks.
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
  };

  selectCard(e, card, index) {
    console.log('type of card', card)
    e.preventDefault();
    // switch to visible
    this.props.chooseCard(index);
  }
  render() {
    return(
      <CardsWrapper gameLevel={ this.props.gameLevel }>
        { this.props.cards.map((card, index) => {
          return (
            <CardDivDynamic
              key={ index }
              image={ card.status === 'visible' ? card.image : cardBackImage }
              size={ card.status === 'visible' ? 'cover' : null }
              onClick={ e => this.selectCard(e, card, index) }>{ card.name }</CardDivDynamic>
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
  }), { chooseCard })(CardsContainer);

