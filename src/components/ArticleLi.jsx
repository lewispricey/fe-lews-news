import React from 'react';

const ArticleLi = ({article}) => {
    return (
        <li className='articles__list__item' key={article.article_id}>
            <h3 className='articles__articleli__title'>{article.title}</h3>
            <h4 className='articles__articleli__author'>{article.author}</h4>
            <p className='articles__articleli__topic'>Topic: {article.topic}</p>
            <p className='articles__articleli__votes'>Votes: {article.votes}</p>
            <p className='articles__articleli__comments'>Comment Count: {article.comment_count}</p>
        </li>
    );
};

export default ArticleLi;