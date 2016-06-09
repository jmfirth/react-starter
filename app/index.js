import React from 'react'
import { render } from 'react-dom'

import App from './App'


/**
 * Mount the application to the DOM
 */
render(<App />, document.getElementById('app'))


/**
 * Apply hot module reload if webpack plugin is available
 */
if (module.hot)
  module.hot.accept()
