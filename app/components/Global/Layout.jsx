import React from 'react'

import Header from './Header'
import Footer from './Footer'


/**
 * Layout component
 */
const Layout = ({
  children
}) => {

  return (
    <div id = 'site'>
      <Header/>
      <div id = 'main'>
        { children }
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
