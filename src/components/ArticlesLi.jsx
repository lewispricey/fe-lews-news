import React from 'react';
import '../styles/articles.css'
import { Link } from 'react-router-dom';
import Loading from './Loading';

const ArticlesLi = ({article}) => {
    return (
            <li className='articles__list__item__container' key={article.article_id}>
                <Link className='link' to={`/article/${article.article_id}`}>
                    <article className='articles__list__item'>
                        <h3 className='articles__articleli__title'>{article.title}</h3>
                        <h5 className='articles__articleli__author'>{article.author}</h5>
                        <p className='articles__articleli__topic'>Topic: {article.topic}</p>
                        <p className='articles__articleli__votes'>Votes: {article.votes}</p>
                        <p className='articles__articleli__comments'>Comment Count: {article.comment_count}</p>
                    </article>
                </Link>
            </li>
    );
};

export default ArticlesLi;