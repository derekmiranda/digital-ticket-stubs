// importing to allow generators and async/await working
import 'babel-polyfill';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import App from 'components/App';
import reducer from 'reducers';
import rootSaga from 'sagas';

console.log('h0')

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  thunk,
  sagaMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);