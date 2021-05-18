import React from 'react';
import '../../scss/components/nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink exact to="/"/>
            <NavLink to="/about"/>
            <NavLink to="/skills"/>
            <NavLink to="/work"/>
            <NavLink to="/contact"/>
        </div>
    )
}

export default Nav
