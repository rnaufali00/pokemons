import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

const Header = () =>(
    <div className="header-custom">
        <Link to="/"><img src="/International_Pokémon_logo.png" alt=""/></Link>
    </div>
)

export default Header;