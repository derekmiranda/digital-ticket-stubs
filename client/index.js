import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from 'components/App';
import reducer from 'reducers';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducer, {
  viewings: [
    {
      id: 1,
      title: 'Butt Goblins 3',
      venue: 'sdfsdfd',
      watchtime: {
        month: 10,
        day: 26,
        year: 1992,
      }
    }
  ]
}, applyMiddleware(...middleware));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);