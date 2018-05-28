import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
import cardsActions from 'redux/cards/cardsActions';
const {
  chooseCardRequest
} = cardsActions;
import { GAME_STATE } from 'redux/game/gameReducer';

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
  };
  selectCard(e, card, index) {
    e.preventDefault();
    if(this.props.gameState === GAME_STATE.get('playerTurn')) {
      this.props.chooseCardRequest(index);
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
  }), {
    chooseCardRequest,
  })(CardsContainer);

