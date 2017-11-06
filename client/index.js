import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from 'components/App';
import reducer from 'reducers';

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
}, applyMiddleware(thunk, logger));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);