import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { initialHomeState, homeReducer } from './view/home/reducer'


const NOOP_ACTION = 'NOOP'


const noOp = {
  type: NOOP_ACTION
}


/**
 * Common reducer mapping
 */
const mapReducers = (state, action, map) =>
      map[action.type] ? map[action.type](state, action) : state


/**
 * Mapped view state and reducers
 */

// Tabs view reducers
const HomeView = (
  state = initialHomeState,
  action = noOp
) => mapReducers(state, action, homeReducer)


export default combineReducers({
  routing: routerReducer,
  View: combineReducers({
    Home: HomeView
  })
})
