import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getArticleByID from '../api/getArticleByID';
import Articles from './Articles';

const Article = () => {
    const [article, setArticle] = useState({})
    const {articleID} = useParams()

    useEffect(() => {
        getArticleByID(articleID)
        .then(({article}) => setArticle(article))
    }, [])
    
    return (
        <article className='fullarticle'>
            <h3 className='article__title'>{article.title}</h3>
            <h5 className='article__author'>Author: {article.author}</h5>
            <p className='article__bodytext'>{article.body}</p>
            <p className='article__timestamp'>Posted: {article.created_at}</p>
            <p className='article__likes'>Likes: {article.votes}</p>
            <p className='article__commentcount'>Comments: {article.comment_count}</p>
            <button className='article__leaveCommentBtn' type="submit">Leave Comment</button>
            <hr className='article__divider'/>
        </article>
    );
};

export default Article;