import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import cardsActions from 'redux/cards/cardsActions';
import sharedActions from 'redux/shared/sharedActions';
import { GAME_STATE } from 'redux/game/gameReducer';
import cardBackImage from 'redux/cards/images/card-back.png';
import CardsComponents from 'components/cards/cardsComponents.jsx';
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
const { chooseCardRequest } = cardsActions;

class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    chooseCardRequest: PropTypes.func,
  }
  selectCard(e, card, index) {
    e.preventDefault();
    if(this.props.gameState === GAME_STATE.get('playerTurn')) {
      this.props.chooseCardRequest(index);
    }
  }
  render() {
    return(
      <CardsWrapper className='cardsWrapper' gameLevel={ this.props.gameLevel }>
        { this.props.cards.map((card, index) => {
          return (
            <CardDivDynamic
              className='cardDivDynamic'
              key={ index }
              image={ card.get('status') === 'visible' ? card.get('image') : cardBackImage }
              status={ card.get('status') }
              onClick={ e => this.selectCard(e, card, index) }>
            </CardDivDynamic>
            );
          })
        }
      </CardsWrapper>
    );
  }
}
export default connect(
  state => ({
    cards: state.getIn(['cards', 'all']),
    gameState: state.getIn(['game', 'state']),
    gameLevel: state.getIn(['game', 'level']),
  }), { chooseCardRequest })(CardsContainer);

