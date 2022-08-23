import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getArticleByID from '../api/getArticleByID';
import patchArticleVote from '../api/patchArticleVote';
import Articles from './Articles';

const Article = () => {
    const [article, setArticle] = useState({})
    const {articleID} = useParams()

    useEffect(() => {
        getArticleByID(articleID)
        .then(({article}) => setArticle(article))
    }, [])
    
    const handleClickLikes = (event) => {
        patchArticleVote(articleID, event.target.value).catch((err) => {
            window.alert("Vote Failed, please check and try again...")
            updatedArticle.votes = parseInt(updatedArticle.votes) - parseInt(event.target.value)
            setArticle({...updatedArticle})
            event.target.disabled = false
        })
        event.target.disabled = true
        const updatedArticle = {...article}
        updatedArticle.votes = parseInt(updatedArticle.votes) + parseInt(event.target.value)
        setArticle(updatedArticle)
    }


    return (
        <article className='fullarticle'>
            <h3 className='article__title'>{article.title}</h3>
            <h5 className='article__author'>Author: {article.author}</h5>
            <p className='article__bodytext'>{article.body}</p>
            <p className='article__timestamp'>Posted: {article.created_at}</p>
            <p className='article__likes'>Likes: {article.votes}</p>
            <aside className='article__vote__btns'>
                <button onClick={handleClickLikes} value='1' className="vote vote__up" >👍</button>
                <button onClick={handleClickLikes} value='-1'className="vote vote__down">👎</button>
            </aside>

            <p className='article__commentcount'>Comments: {article.comment_count}</p>
            <button className='article__leaveCommentBtn' type="submit">Leave Comment</button>
            <hr className='article__divider'/>
        </article>
    );
};

export default Article;