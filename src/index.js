import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import { injectGlobal } from 'styled-components'
import 'typeface-raleway'
//import stateless components
import Header from './components/header'
import Footer from './components/footer'
//import containers
import Home from './containers/Home'
import About from './containers/About'
import Blog from './containers/Blog'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Blog path="/blog" />
      </Router>
      <Footer/>
    </Fragment>
  )
}

injectGlobal`
  body {
    font-family: Raleway, Sans;
    margin: 0 auto;
  }
`

render(<App />, document.getElementById('root'));
