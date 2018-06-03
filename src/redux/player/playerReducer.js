import Immutable from 'immutable';
import playerActions from 'redux/player/playerActions';

export const initialState = Immutable.Map({
  current: null,
  all: Immutable.List(),
  totalScores: 0, //add 1 for every pair matched (we halve the number of matched cards)
  gameWinnerNames: null,
});
export default function playersReducer(
  currentState = initialState,
  action
) {
  switch (action.type) {
    case playerActions.ADD_PLAYER: {
      const newPlayer = Immutable.Map({ 'name': action.name, 'playerScore': 0 });
      return currentState.update('all', all => all.push(newPlayer));
    }
    case playerActions.SET_FIRST_PLAYER:
      return currentState.set('current', 0);
    case playerActions.SWITCH_PLAYER: {
      const nextPlayerIdx = (currentState.get('current') + 1) % (currentState.get('all').size);
      return currentState.set('current', nextPlayerIdx);
    }
    case playerActions.UPDATE_TOTAL_SCORE:
      return currentState.set('totalScores', action.totalScores/2);
    case playerActions.UPDATE_PLAYER_SCORE: {
      const playerIdx = currentState.get('current');
      const playerScore = currentState.getIn(['all', playerIdx, 'playerScore']);
      return currentState.setIn(['all', playerIdx, 'playerScore'], playerScore + 1);
    }
    case playerActions.DETERMINE_GAME_WINNER: {
      const players = currentState.get('all').toJS();
      const winningScore = Math.max.apply(Math, players.map(o => o.playerScore));
      const winnersNames = players.filter(entry => entry.playerScore === winningScore).map(player => player.name).join(' and ');
      console.log('playerActions.DETERMINE_GAME_WINNER, winnersNames', winnersNames)
      return currentState.set('gameWinnerNames', winnersNames);
    }
    default:
      return currentState;
  }
}
