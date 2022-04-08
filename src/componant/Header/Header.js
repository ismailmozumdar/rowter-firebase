import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Login'>Log In</NavLink>
            </nav>
        </div>
    );
};

export default Header;