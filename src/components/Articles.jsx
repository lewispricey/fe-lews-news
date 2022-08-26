import React, { useState } from 'react';
import '../styles/articles.css'
import ArticlesList from './ArticlesList';
import { useParams } from 'react-router-dom';

const Articles = () => {
    const { topic } = useParams()
    return (
        <div>
            <h1>{topic === undefined? "Articles" : `${topic} Articles` }</h1>
            <h2>Check out our avalible articles below:</h2>
            <ArticlesList topic={topic}/>
        </div>
    );
};

export default Articles;