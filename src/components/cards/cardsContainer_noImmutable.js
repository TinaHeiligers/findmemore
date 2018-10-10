import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import cardsActions from 'redux/cards/cardsActions';
import { GAME_STATE } from 'redux/game/gameReducer';
import cardBackImage from 'redux/cards/images/card-back.png';
import CardsComponents from 'components/cards/cardsComponents.jsx';
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
const { chooseCardRequest } = cardsActions;

class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.array,
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    chooseCardRequest: PropTypes.func,
  }
  selectCard(e, card, index) {
    e.preventDefault();
    if(this.props.gameState === GAME_STATE.playerTurn) {
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
              image={ card.status === 'visible' ? card.image : cardBackImage }
              status={ card.status }
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
    cards: state.cards.all,
    gameState: state.game.state,
    gameLevel: state.game.level,
  }), { chooseCardRequest })(CardsContainer);

