import { call, put, takeEvery, select } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import Immutable from 'Immutable';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import { getCards } from 'redux/cards/cardsServices';
import {
  getCardsRequestWatcher,
  getCardsRequest,
  chooseCardRequestWatcher,
  chooseCardRequest,
  matchCardsRequestWatcher,
  matchCardsRequest,
  selectedCards,
  hasMatch,
  totalMatchedCards,
  allGameCards,
} from 'redux/cards/cardsSaga';

const SEP = '\n      ';
const done = { done: true, value: undefined };

describe('cards saga -> getCardsRequestWatcher', () => {
  const getCardsRequestWatcherGen = getCardsRequestWatcher();
  it('should act on every GET_CARDS_REQUEST action', () => {
    expect(getCardsRequestWatcherGen.next().value)
    .toEqual(takeEvery(cardsActions.GET_CARDS_REQUEST, getCardsRequest));
  });
});
describe('cards saga -> getCardsRequest', () => {
  const testLevel = { level: 'easy' };
  const getCardsRequestGen = getCardsRequest(testLevel);
  it('should call the api given a game level', () => {
    expect(getCardsRequestGen.next().value)
    .toEqual(call(getCards, testLevel.level));
  });
  it('should put START_GAME on success of the api call', () => {
    const testResult = { cards: [] };
    expect(getCardsRequestGen.next(testResult).value)
    .toEqual(put({ type: cardsActions.GET_CARDS_SUCCESS, cards: testResult }));
  });
  it('should push to the game component when we have cards on start', () => {
    expect(getCardsRequestGen.next(cardsActions.getCardsSuccess()).value)
    .toEqual(put(push('/game')));
  });
  it('should put START_GAME_ERROR action on an error', () => {
    const testError = new Error('Error');
    expect(getCardsRequestGen.throw(testError).value)
    .toEqual(put({ type: cardsActions.GET_CARDS_ERROR, error: testError }));
  });
});
describe('cards saga -> chooseCardRequestWatcher', () => {
  const chooseCardRequestWatcherGen = chooseCardRequestWatcher();
  it('should act on every CHOOSE_CARD_REQUEST action', () => {
    expect(chooseCardRequestWatcherGen.next().value)
    .toEqual(takeEvery(cardsActions.CHOOSE_CARD_REQUEST, chooseCardRequest));
  });
});
describe('cards saga -> chooseCardRequest', () => {
  const testAction = { index: 0 };
  const chooseCardRequestGen = chooseCardRequest(testAction);
  it('should put CHOOSE_CARD when provided a card index', () => {
    const testAction2 = { index: 0 };
    expect(chooseCardRequestGen.next().value)
    .toEqual(put({ type: cardsActions.CHOOSE_CARD, index: testAction2.index }))
  });
  it('should select selectedCards after CHOOSE_CARD', () => {
    expect(chooseCardRequestGen.next(cardsActions.chooseCard(0)).value)
    .toEqual(select(selectedCards));
  });
  it('should put matchCardsRequest when selectedCards has size of 2', () => {
    const testSelectedCards = Immutable.List.of(1, 2);
    expect(chooseCardRequestGen.next(testSelectedCards).value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS_REQUEST }));
  });
  it('should put switchTurns after matchCardsRequest', () => {
    expect(chooseCardRequestGen.next(cardsActions.matchCardsRequest()).value)
    .toEqual(put({ type: gameActions.SWITCH_TURNS }));
  });
  it('should select allGameCards after SWITCH-TURNS', () => {
    expect(chooseCardRequestGen.next(gameActions.switchTurns()).value)
    .toEqual(select(allGameCards)); // this answer is the value of the generator now
  });
  it('should select totalMatchedCards after selecting allGameCards', () => {
    expect(chooseCardRequestGen.next(2).value) // passing in the value of the generator from select(allGameCards)
    .toEqual(select(totalMatchedCards));// this answer is the value of the generator now
  });
  it('should put SET_GAME_OVER when totalMatchedCards + 2 equals allGameCards size', () => {
    expect(chooseCardRequestGen.next(0).value)// passing in the value of the generator from select(totalMatchedCards)
    .toEqual(put(gameActions.setGameOver()));
  });
  it('should put switchPlayer after setGameOver', () => {
    expect(chooseCardRequestGen.next(gameActions.setGameOver()).value)
    .toEqual(put({ type: playerActions.SWITCH_PLAYER }));
  });
});
describe('cards saga -> matchCardsRequestWatcher', () => {
  const matchCardsRequestWatcherGen = matchCardsRequestWatcher();
  it('should act on every MATCH_CARDS_REQUEST action', () => {
    expect(matchCardsRequestWatcherGen.next().value)
    .toEqual(takeEvery(cardsActions.MATCH_CARDS_REQUEST, matchCardsRequest));
  });
});
describe('cards saga -> matchCardsRequest', () => {
  const matchCardsRequestGen = matchCardsRequest();
  it('should put MATCH_CARDS', () => {
    expect(matchCardsRequestGen.next().value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS }));
  });
  it('should select hasMatch after MATCH_CARDS', () => {
    expect(matchCardsRequestGen.next(cardsActions.countMatchedCards()).value)
    .toEqual(select(hasMatch));
  });
  it('should put COUNT_MATCHED_CARDS when hasMatch is true', () => {
    expect(matchCardsRequestGen.next(true).value).toEqual(put({ type: cardsActions.COUNT_MATCHED_CARDS }))
  });
  it('should select totalMatchedCards after COUNT_MATCHED_CARDS', () => {
    expect(matchCardsRequestGen.next(cardsActions.countMatchedCards()).value)
    .toEqual(select(totalMatchedCards));
  });
  it('should put UPDATE_PLAYER_SCORE after selecting totalMatchedCards', () => {
    const testMatchedCardsCount = 4;
    expect(matchCardsRequestGen.next(testMatchedCardsCount).value).toEqual(put({ type: playerActions.UPDATE_PLAYER_SCORE }));
  });
  it('should put UPDATE_TOTAL_SCORE when totalMatchedCards has a value', () => {
    const testMatchedCardsCount = 4;
    expect(matchCardsRequestGen.next().value)
    .toEqual(put({ type: playerActions.UPDATE_TOTAL_SCORE, totalScores: testMatchedCardsCount }))
  });
  it('should put MATCH_CARDS_ERROR action on an error', () => {
    const testError = { message: 'cannot match cards' };
    expect(matchCardsRequestGen.throw(testError).value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS_ERROR, error: testError }));
  });
});
