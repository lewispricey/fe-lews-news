import React, { useEffect, useState } from 'react';
import Loading from './Loading.jsx'
import '../styles/articles.css'
import getArticlesByTopic from '../api/getArticlesByTopic';
import ArticlesFilters from './ArticlesFilters';
import ArticlesLi from './ArticlesLi';
import Err404 from './Err404'

const ArticlesList = ({topic}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        if(topic !== undefined){
            getArticlesByTopic(topic)
            .then(({articles}) => setArticles(articles))
            .catch((err) => {
                setErr(404)
            })
        }
        setIsLoading(false)
    }, [topic])
    
    return (
        <>
            {err === 404 ? <Err404 /> : null}
            {isLoading ? <Loading /> : null}
            <ArticlesFilters articles={articles} setArticles={setArticles} setIsLoading={setIsLoading}/>
            <ul className='articles__list'>
                {articles.map((article) => <ArticlesLi key={article.article_id} article={article}/>)}
            </ul>
        </>
    );
};

export default ArticlesList;