import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className='navlinks'>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/signin">Sign In</Link>
        </div>
    );
};

export default NavLinks;