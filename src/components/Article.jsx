import React, { useEffect, useState } from 'react';
import '../styles/article.css'
import { useParams } from 'react-router-dom';
import getArticleByID from '../api/getArticleByID';
import patchArticleVote from '../api/patchArticleVote';
import CommentList from './CommentList';
import Loading from './Loading';

const Article = () => {
    const [article, setArticle] = useState({})
    const [showComments, setShowComments] = useState(false)
    const [err, setErr] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {articleID} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticleByID(articleID).then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [articleID])

    const handleClickLikes = (event) => {
        setIsLoading(true)
        event.target.disabled = true
        patchArticleVote(articleID, event.target.value)
        .then((response) => {
            setIsLoading(false)
            setErr(false)
            event.target.disabled = false
        })
        .catch((err) => {
            setIsLoading(false)
            setErr(true)
            updatedArticle.votes = parseInt(updatedArticle.votes) - parseInt(event.target.value)
            setArticle({...updatedArticle})
            event.target.disabled = false
        })
        const updatedArticle = {...article}
        updatedArticle.votes = parseInt(updatedArticle.votes) + parseInt(event.target.value)
        setArticle(updatedArticle)
    }

    const toggleCommentsView = () =>{
        setShowComments(!showComments)
    }
    return (
        <>
        <article className='fullarticle'>
            {isLoading ? <Loading layoutClass="article__loading"/> : null}
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
            <button onClick={toggleCommentsView} className='article__leaveCommentBtn'>{showComments === true ? "Hide Comments": "View Comments"}</button>
            <hr className='article__divider'/>
            {err === true ? <p className='article__err err'>Vote Failed, please check and try again...</p> : null}
        </article>
            {showComments === true ? <CommentList articleID={articleID}/> : null}
        </>
    );
};

export default Article;