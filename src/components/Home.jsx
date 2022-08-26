import React, { useContext, useEffect, useState } from 'react';
import getNewestArticles from '../api/getNewestArticles';
import UserContext from '../contexts/User';
import '../styles/home.css'
import HomeSignInBanner from './HomeSignInBanner';
import HomeTrendingLi from './HomeTrendingLi';


const Home = () => {
    const [newArticles, setNewArticles] = useState([])
    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
        getNewestArticles(4).then(({articles}) => {
            setNewArticles(articles)
        }).catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Home</h1>
                {!user.username ? <HomeSignInBanner/> : null}
                <section className='home__trending__container'>
                    <h2 className='home__trending__title'>Newest Articles:</h2>
                    {newArticles.map((article) => <HomeTrendingLi key={article.title} article={article}/>)}
                </section>

        </div>
    );
};

export default Home;