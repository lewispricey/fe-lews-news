import React, { useContext, useEffect, useState } from 'react';
import getNewestArticles from '../api/getNewestArticles';
import UserContext from '../contexts/User';
import '../styles/home.css'
import HomeSignInBanner from './HomeSignInBanner';
import HomeTrendingLi from './HomeTrendingLi';
import Loading from './Loading';


const Home = () => {
    const [newArticles, setNewArticles] = useState([])
    const {user, setUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getNewestArticles(4).then(({articles}) => {
            setIsLoading(false)
            setNewArticles(articles)
        }).catch((err) => {
            setErr(true)
            setIsLoading(false)
        })
    }, [])

    return (
        <div>
            <h1>Home</h1>
                {!user.username ? <HomeSignInBanner/> : null}
                <section className='home__trending__container'>
                    <h2 className='home__trending__title'>Newest Articles:</h2>
                    {isLoading ? <Loading layoutClass='home__loading'/> : null}
                    {err ? <p className='err home__err'>Something went wrong, please try again...</p> : null}
                    {newArticles.map((article) => <HomeTrendingLi key={article.title} article={article}/>)}
                </section>

        </div>
    );
};

export default Home;