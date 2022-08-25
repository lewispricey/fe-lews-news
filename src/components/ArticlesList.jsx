import React, { useEffect, useState } from 'react';
import getArticles from '../api/getArticles';
import '../styles/articles.css'
import getArticlesByTopic from '../api/getArticlesByTopic';
import ArticlesFilters from './ArticlesFilters';
import ArticlesLi from './ArticlesLi';

const ArticlesList = ({topic}) => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        if(topic !== undefined){
            getArticlesByTopic(topic).then(({articles}) => setArticles(articles))
        }
    }, [topic])
    
    return (
        <>
            <ArticlesFilters articles={articles} setArticles={setArticles}/>
            <ul className='articles__list'>
                {articles.map((article) => <ArticlesLi key={article.article_id} article={article}/>)}
            </ul>
        </>
    );
};

export default ArticlesList;