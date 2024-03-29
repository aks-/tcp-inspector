import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import tcpInspectorApp from './reducers'
import App from './components/app'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ipcRenderer as ipc } from 'electron'

const store = createStore(
  tcpInspectorApp,
  compose(applyMiddleware(thunk, logger))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)
