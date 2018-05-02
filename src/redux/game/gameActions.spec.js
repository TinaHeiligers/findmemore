import gameActions from 'redux/game/gameActions.js';
describe ('action creators -> gameActions', () => {
  it('startGame starts a new game, given a level', () => {
    const testLevel = 'easy';
    const testStartGame = gameActions.startGame(testLevel);
    expect(testStartGame).toEqual({
      type: gameActions.START_GAME,
      level: testLevel,
    });
  });
});
