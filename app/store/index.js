import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import rootReducer from './rootReducer'


/**
 * The router middleware with HTML5 history support
 */
const routerHistoryMiddleware = routerMiddleware(browserHistory)


/**
 * The proper `createStore` method to use.  In development environments we want to
 * enable Redux DevTools support.  We can apply this using the DevTools-supplied
 * wrapper to the redux `createStore` utility
 */
const actualCreateStore = typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()(createStore)
      : createStore


/**
 * The redux store
 */
export const store = applyMiddleware(
  thunk,
  routerHistoryMiddleware
)(actualCreateStore)(rootReducer)


/**
 * The history provider, wired to the redux store
 */
export const history = syncHistoryWithStore(browserHistory, store)
