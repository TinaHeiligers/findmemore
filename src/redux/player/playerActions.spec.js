import playerActions from 'redux/player/playerActions.js';
describe ('>>ACTION -- Test playerActions', () => {
  it('++actionCreator addPlayer', () => {
    const testName = 'Name';
    const testAddPlayer = playerActions.addPlayer(testName);
    expect(testAddPlayer).toEqual({
      type: playerActions.ADD_PLAYER,
      name: testName,
    });
  });
});
