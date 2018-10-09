import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import reducers from 'redux/rootReducers';
import rootSaga from 'redux/rootSagas';

export default (history) => {
  const routes = {
    '/startPage' : {
      title: 'Start',
    },
    '/game': {
      title: 'Game',
    },
    '/help': {
      title: 'Help',
    },
  };
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
