import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'redux-little-router';
import gameActions from 'redux/game/gameActions';
import cardsActions from 'redux/cards/cardsActions';
import { getCards } from 'redux/cards/cardsServices';
import { getCardsRequestWatcher, getCardsRequest, matchCardsRequestWatcher, matchCardsRequest } from 'redux/cards/cardsSaga';

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
describe('cards saga -> matchCardsRequest', () => {
  const steps = ['1) puts MATCH_CARDS', '3) puts RESET_CHOSEN_CARDS'];
  const matchCardsRequestGen = matchCardsRequest();
  it('should put MATCH_CARDS', () => {
    expect(matchCardsRequestGen.next().value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS }));
  });
  it('should put RESET_CHOSEN_CARDS after MATCH_CARDS', () => {
    expect(matchCardsRequestGen.next(cardsActions.resetChosenCards()).value)
    .toEqual(put({ type: cardsActions.RESET_CHOSEN_CARDS }));
  });
  it('should put MATCH_CARDS_ERROR action on an error', () => {
    const testError = { message: 'cannot match cards' };
    expect(matchCardsRequestGen.throw(testError).value)
    .toEqual(put({ type: cardsActions.MATCH_CARDS_ERROR, error: testError }));
  });
});
