import React from 'react';
import '../../scss/components/nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink exact to="/">
            </NavLink>
            <NavLink to="/about">
            </NavLink>
            <NavLink to="/skills">
            </NavLink>
            <NavLink to="/work">
            </NavLink>
            <NavLink to="/contact">
            </NavLink>
        </div>
    )
}

export default Nav
