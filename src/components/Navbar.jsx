import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo/>
            <NavLinks/>
        </div>
    );
};

export default Navbar;