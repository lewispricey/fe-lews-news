import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getArticleByID from '../api/getArticleByID';
import patchArticleVote from '../api/patchArticleVote';
import CommentList from './CommentList';

const Article = () => {
    const [article, setArticle] = useState({})
    const [showComments, setShowComments] = useState(false)
    const {articleID} = useParams()

    useEffect(() => {
        getArticleByID(articleID).then(({article}) => setArticle(article))
    }, [articleID])

    const handleClickLikes = (event) => {
        event.target.disabled = true
        patchArticleVote(articleID, event.target.value).catch((err) => {
            window.alert("Vote Failed, please check and try again...")
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
        console.log(showComments)
    }
    return (
        <>
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
            <button onClick={toggleCommentsView} className='article__leaveCommentBtn'>{showComments === true ? "Hide Comments": "View Comments"}</button>
            <hr className='article__divider'/>
        </article>
            {showComments === true ? <CommentList articleID={articleID}/> : ""}
        </>
    );
};

export default Article;