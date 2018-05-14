import { applyMiddleware, createStore } from 'redux';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { routerForBrowser } from 'redux-little-router';
import { immutableRouterForBrowser } from 'redux-little-router';
import reducers from 'redux/rootReducers';
import rootSaga from 'redux/rootSagas';

export default function () {
  // any data to attach to the router key of state when we're on this route
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

  const { reducer: routerReducer, enhancer, middleware: routerMiddleware } = immutableRouterForBrowser({ routes });

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware, sagaMiddleware];

  const allReducers = {
    ...reducers,
    router: routerReducer
  };

  const initialState = Immutable.Map({});
  const store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
