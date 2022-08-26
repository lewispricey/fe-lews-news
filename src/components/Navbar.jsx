import React, { useState } from 'react';
import '../styles/navbar.css'
import Logo from './Logo';
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom';

const Navbar = ({user}) => {
    const [navClicked, setNavClicked] = useState(false)

    const handleClickNav = () => {
        setNavClicked(!navClicked)
    }
    
    const handleClickLink = () => {
        setNavClicked(false)
    }

    return (
        <div className='navbar'>
            <Logo/>
            <NavLinks/>
            <img className='navbar__avatar' src={user.avatar_url || 'https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg'} alt={user.username} />
            <button onClick={handleClickNav} className='navbar__hamburger'>☰</button>
            
            {navClicked ? (
                <div className={navClicked ? 'navbar__expanded' : 'navlinks'} >
            <Link onClick={handleClickLink} className='nav__link' to="/">Home</Link>
            <Link onClick={handleClickLink} className='nav__link' to="/articles">Articles</Link>
            <Link onClick={handleClickLink} className='nav__link' to="/topics">Topics</Link>
            <Link onClick={handleClickLink} className='nav__link' to="/signin">Sign In</Link>
            </div>) : null}
        </div>
    );
};

export default Navbar;