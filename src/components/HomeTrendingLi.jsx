import React from 'react';

const HomeTrendingLi = ({article}) => {
    return (
        <div className='home__trendingarticle__container'>
            <h3 className='home__trendingarticle__title'>{article.title}</h3>
            <p>Author: {article.author}</p>
        </div>
    );
};

export default HomeTrendingLi;