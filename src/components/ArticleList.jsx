import React, { useEffect } from 'react';
import { useState } from 'react';
import getArticles from '../api/getArticles';
import getArticlesByTopic from '../api/getArticlesByTopic';
import ArticleLi from './ArticleLi';

const ArticleList = ({topic}) => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        if(topic !== undefined){
            getArticlesByTopic(topic).then(({articles}) => setArticles(articles))
        } else{
            getArticles().then(({articles}) => setArticles(articles))
        }
    }, [])
    
    return (
            <ul className='articles__list'>
                {articles.map((article) => <ArticleLi key={article.article_id} article={article}/>)}
            </ul>
    );
};

export default ArticleList;