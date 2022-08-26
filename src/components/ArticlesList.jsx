import React, { useEffect, useState } from 'react';
import Loading from './Loading.jsx'
import '../styles/articles.css'
import getArticlesByTopic from '../api/getArticlesByTopic';
import ArticlesFilters from './ArticlesFilters';
import ArticlesLi from './ArticlesLi';

const ArticlesList = ({topic}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        if(topic !== undefined){
            getArticlesByTopic(topic)
            .then(({articles}) => {
                setArticles(articles)
            })
        }
        setIsLoading(false)
    }, [topic])
    
    return (
        <>
            {isLoading ? <Loading /> : null}
            <ArticlesFilters articles={articles} setArticles={setArticles} setIsLoading={setIsLoading}/>
            <ul className='articles__list'>
                {articles.map((article) => <ArticlesLi key={article.article_id} article={article}/>)}
            </ul>
        </>
    );
};

export default ArticlesList;