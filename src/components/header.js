import React from 'react'
import styled from 'react-emotion'
import { Link } from '@reach/router'

//style
const Header = styled('header')`
  width: 100%;
  background: rgba(255,255,255,0.6);
  position: fixed;
  li {
    display: inline;
    list-style: none;
    padding: 0 1em 1em 0;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
`

//component
export default () => {
  return(
    <Header>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
      </ul>
    </Header>
  )
}
