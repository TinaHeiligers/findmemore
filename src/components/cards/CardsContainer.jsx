import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
// REDUX
import cardsActions from 'redux/cards/cardsActions';
import sharedActions from 'redux/shared/sharedActions';
import { GAME_STATE } from 'redux/game/gameReducer';
const {
  chooseCardRequest
} = cardsActions;
const { hideModal } = sharedActions;
// UI COMPONENTS
import CardsComponents from 'components/cards/cardsComponents.jsx'; // path in imports is relative to src.
const CardsWrapper = CardsComponents.CardsWrapper;
const CardDivDynamic = CardsComponents.CardDivDynamic;
import cardBackImage from 'redux/cards/images/card-back.png';
import { GameOverModal } from 'components/shared/Modal';
class CardsContainer extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(Immutable.List),
    gameState: PropTypes.string,
    gameLevel: PropTypes.string,
    chooseCardRequest: PropTypes.func,
    modalVisible: PropTypes.bool,
    hideModal: PropTypes.func,
    winningNames: PropTypes.string,
  }
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
          })
        }
        { this.props.modalVisible &&
          <GameOverModal
            handleClose={ this.props.hideModal }
            winningNames={ this.props.winningNames }
            nextPlayerName={ null }>
          </GameOverModal>
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
    modalVisible: state.getIn(['shared', 'modalVisible']),
    winningNames: state.getIn(['players', 'gameWinnerNames'])
  }), {
    chooseCardRequest,
    hideModal,
  })(CardsContainer);

