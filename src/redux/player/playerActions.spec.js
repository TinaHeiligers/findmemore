import playerActions from 'redux/player/playerActions.js';
describe ('player action creators -> playerActions', () => {
  it('addPlayer adds a player, given a name', () => {
    const testName = 'Name';
    const testAddPlayer = playerActions.addPlayer(testName);
    expect(testAddPlayer).toEqual({
      type: playerActions.ADD_PLAYER,
      name: testName,
    });
  });
});
