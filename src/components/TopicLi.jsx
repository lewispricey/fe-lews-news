import React from 'react';
import { Link } from 'react-router-dom';

const TopicLi = ({topic}) => {
    return (
        <Link className='topic__link' to={`/articles/${topic.slug}`}>
            <li className='topic__card'>
              <h4 className='topic__title'>{topic.slug}</h4>  
              <p className='topic__description'>{topic.description}</p>
            </li>
        </Link>
    );
};

export default TopicLi;