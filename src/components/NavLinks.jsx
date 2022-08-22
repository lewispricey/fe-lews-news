import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className='navlinks'>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
        </div>
    );
};

export default NavLinks;