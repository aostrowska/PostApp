import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import firebase from 'firebase'

import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'

import App from './containers/App/AppContainer'
import firebaseConfig from './config/firebase'

import './index.css'

firebase.initializeApp(firebaseConfig)

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker()
