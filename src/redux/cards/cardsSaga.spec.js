import { call, put, takeEvery, select } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import playerActions from 'redux/player/playerActions';
import { getCards } from 'redux/cards/cardsServices';
import {
  getCardsRequestWatcher,
  getCardsRequest,
  matchCardsRequestWatcher,
  matchCardsRequest,
  selectedCards,
  hasMatch,
  totalMatchedCards,
} from 'redux/cards/cardsSaga';

const SEP = '\n      ';
const done = { done: true, value: undefined };

describe('cards saga -> getCardsRequestWatcher', () => {
  const steps = ['1) takes every START_GAME action'];
  const getCardsRequestWatcherGen = getCardsRequestWatcher();
  it('should act on every GET_CARDS_REQUEST action', () => {
    expect(getCardsRequestWatcherGen.next().value)
    .toEqual(takeEvery(cardsActions.GET_CARDS_REQUEST, getCardsRequest));
  });
});
describe('cards saga -> getCardsRequest', () => {
  const steps = ['1) puts GET_CARDS_REQUEST', '2) puts SET_FIRST_PLAYER_REQUEST'];
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
describe('cards saga -> matchCardsRequestWatcher', () => {
  const steps = ['1) takes every MATCH_CARDS_REQUEST action'];
  const matchCardsRequestWatcherGen = matchCardsRequestWatcher();
  it('should act on every MATCH_CARDS_REQUEST action', () => {
    expect(matchCardsRequestWatcherGen.next().value)
    .toEqual(takeEvery(cardsActions.MATCH_CARDS_REQUEST, matchCardsRequest));
  });
});
describe.only('cards saga -> matchCardsRequest', () => {
  const steps = ['1) puts MATCH_CARDS', '3) selects hasMatch'];
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

  // it('should put COUNT_MATCHED_CARDS after MATCH_CARDS', () => {
  //   expect(matchCardsRequestGen.next(cardsActions.countMatchedCards()).value)
  //   .toEqual(put({ type: cardsActions.COUNT_MATCHED_CARDS }));
  // });
  // it('should put RESET_CHOSEN_CARDS after COUNT_MATCHED_CARDS', () => {
  //   expect(matchCardsRequestGen.next(cardsActions.resetChosenCards()).value)
  //   .toEqual(put({ type: cardsActions.RESET_CHOSEN_CARDS }));
  // });
  it('should put MATCH_CARDS_ERROR action on an error', () => {
    const testError = { message: 'cannot match cards' };
    expect(matchCardsRequestGen.throw(testError).value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS_ERROR, error: testError }));
  });
});
