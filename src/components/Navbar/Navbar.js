import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './navbar.scss'

const Navbar = () =>(
    <Nav className="justify-content-center bottom-navbar" activeKey="/">
        <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/myPokemon">My Pokemon</Nav.Link>
        </Nav.Item>
     </Nav>
)

export default Navbar