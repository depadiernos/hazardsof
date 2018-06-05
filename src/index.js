import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import styled, { injectGlobal } from 'react-emotion'
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
    <Body>
      <Header/>
      <RouterDiv>
        <Home path="/"/>
        <About path="/about"/>
        <Blog path="/blog" />
      </RouterDiv>
      <Footer/>
    </Body>
  )
}

injectGlobal`
  body {
    margin: 0;
  }
`

const Body = styled('div')`
  font-family: Raleway, Sans;
  margin: 0 auto;
`
const RouterDiv = styled(Router)`
  padding-top: 52px;
`

render(<App />, document.getElementById('root'));
