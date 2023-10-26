/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Sign Up</Link>
        </nav>
    );
};

export default Header;