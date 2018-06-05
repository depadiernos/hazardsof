import React from 'react'
import styled from 'react-emotion'
import background from '../img/city.jpg'

//style
const Home = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${background}');
  background-attachment: fixed ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  margin-top: -2em;
  height: 100%;
  div {
    background: rgba(255,255,255,0.6);
    width: 100%;
    margin: 0 auto;
    text-align: center;
    text-shadow: -0.1em 0 white, 0 0.1em white, 0.1em 0 white, 0 -0.1em white;
    padding: 3em 0 3em 0;
  }
`

//component
export default () => {
  return(
    <Home>
      <div>
        <p>
          Welcome to Hazardsof.com! <br/>
          This is the website of a nerd, musician, and tinkerer.<br/>
          And this site is all about the hazards of Coding, Tech and Reading -- and other stuff!
        </p>
      </div>
    </Home>
  )
}
