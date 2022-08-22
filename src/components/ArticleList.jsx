import React, { useEffect } from 'react';
import { useState } from 'react';
import getArticles from '../api/getArticles';
import ArticleLi from './ArticleLi';

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {getArticles().then(({articles}) => setArticles(articles))}, [])
    return (
            <ul className='articles__list'>
                {articles.map((article) => <ArticleLi key={article.article_id} article={article}/>)}
            </ul>
    );
};

export default ArticleList;