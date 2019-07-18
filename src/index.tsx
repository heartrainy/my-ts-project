import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import helloSaga from './sagas'

import App from './App'
import './index.less'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)