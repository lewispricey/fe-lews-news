import React from 'react';
import { Link } from 'react-router-dom';

const HomeTrendingLi = ({article}) => {
    return (
        <Link className='home__trendingarticle__container' to={`/article/${article.article_id}`}>
            <h3 className='home__trendingarticle__title'>{article.title}</h3>
            <p className='home__trendingarticle__author'>Author: {article.author}</p>
        </Link>
    );
};

export default HomeTrendingLi;