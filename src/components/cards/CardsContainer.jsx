import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
import cardsActions from 'redux/cards/cardsActions';
const { chooseCard } = cardsActions;
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
import cardBackImage from 'redux/cards/images/card-back.png';
//TODO: add click events and redux action creators to handle the clicks.
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.array,
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
  };

  selectCard(e, card, index) {
    e.preventDefault();
    // switch to visible
    this.props.chooseCard(card, index);
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
    cards: state.cards.all,
    gameState: state.game.state,
    gameLevel: state.game.level,
  }), { chooseCard })(CardsContainer);

