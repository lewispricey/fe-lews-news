import React from 'react';
import { Link } from 'react-router-dom';

const TopicLi = ({topic}) => {
    return (
        <Link to={`/articles/${topic.slug}`}>
            <li className='topic__card'>
              <h4>{topic.slug}</h4>  
              <p>{topic.description}</p>
            </li>
        </Link>
    );
};

export default TopicLi;