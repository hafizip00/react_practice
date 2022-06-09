import React from 'react'

import {Nav , Wrapper , Element , Logo , Signup} from './Routers'

function Navbar() {
  return (
    <div>
        <Nav>
        <Logo>SHADE...</Logo>
            <Wrapper>
                <Element>Home</Element>
                <Element>Features</Element>
                <Element>Services</Element>
                <Element>Pricing</Element>
            </Wrapper>
            <Signup>SIGN UP</Signup>
        </Nav>
    </div>
  )
}

export default Navbar

