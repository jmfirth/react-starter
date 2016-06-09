import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { store, history } from 'store'

import Layout from './components/Global/Layout'
import HomeContainer from './components/Home/Container'

import 'normalize.css'
import './appearance/main.scss'


/**
 * The main App component
 */
const App = () => (
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = '/' component = { Layout }>
        <IndexRoute component = { HomeContainer } />
        <Route path = 'home' component = { HomeContainer } />
      </Route>
    </Router>
  </Provider>
)


export default App
