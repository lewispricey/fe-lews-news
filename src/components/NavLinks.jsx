import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className='navlinks'>
            <Link className='nav__link' to="/">Home</Link>
            <Link className='nav__link' to="/articles">Articles</Link>
            <Link className='nav__link' to="/topics">Topics</Link>
            <Link className='nav__link' to="/signin">Sign In</Link>
        </div>
    );
};

export default NavLinks;