import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

const HomeSignInBanner = () => {
    return (
            <section className='home__signin__banner'>
                <h2 className='home__signin__title'>Hey, we can see you arn't signed in!</h2>
                <p className='home__signin__subtext'>Please click the button below to sign in for the best experiance...</p>
                <Link className='home__signin__btn' to="/signin">Sign In</Link>
            </section>
    );
};

export default HomeSignInBanner;