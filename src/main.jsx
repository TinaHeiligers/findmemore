import 'babel-polyfill'; // generator support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'store';
import { createBrowserHistory } from 'history';
import App from 'components/app.jsx';

const history = createBrowserHistory();
const store = initStore(history);
ReactDOM.render(
  <Provider store={ store }>
    <App history={history} />
  </Provider>,
  document.getElementById('app')
);
