import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
// USE import from src cause upload at github, else use public
import LogoPokemon from '../../assets/International_Pokémon_logo.png';

const Header = () =>(
    <div className="header-custom">
        <Link to="/"><img src={LogoPokemon} alt=""/></Link>
    </div>
)

export default Header;