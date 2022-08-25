import React, { useEffect } from 'react';
import { useState } from 'react';
import getArticles from '../api/getArticles';
import getArticlesByTopic from '../api/getArticlesByTopic';
import ArticlesLi from './ArticlesLi';

const ArticlesList = ({topic}) => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        if(topic !== undefined){
            getArticlesByTopic(topic).then(({articles}) => setArticles(articles))
        } else{
            getArticles().then(({articles}) => setArticles(articles))
        }
    }, [topic])
    
    return (
            <ul className='articles__list'>
                {articles.map((article) => <ArticlesLi key={article.article_id} article={article}/>)}
            </ul>
    );
};

export default ArticlesList;