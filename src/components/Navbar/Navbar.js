import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './navbar.scss'
import { Link } from 'react-router-dom';
import LogoHome from '../../assets/pokemon-pokelist.png';
import LogoMyPokemon from '../../assets/pokemon-mypokemon.png'

const Navbar = () =>(
    <Nav className="justify-content-center bottom-navbar" activeKey="/">
        <Nav.Item>
            <Link className="link-custom" to="/">
                <img src={LogoHome} alt=""/>
                <div>Home</div>
            </Link>
        </Nav.Item>
        <Nav.Item>
            <Link className="link-custom" to="/myPokemon">
                <img src={LogoMyPokemon} alt=""/>
                <div>My Pokemon</div>
            </Link>
        </Nav.Item>
     </Nav>
)

export default Navbar