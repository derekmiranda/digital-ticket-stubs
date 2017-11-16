import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from 'components/App';
import reducer from 'reducers';

const middleware = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middleware));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);