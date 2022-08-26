import React, { useContext, useState } from 'react';
import '../styles/comments.css'
import deleteCommentById from '../api/deleteCommentById';
import UserContext from '../contexts/User';

const CommentLi = ({comment, comments, setComments}) => {
    const {user} = useContext(UserContext)
    const [isErr, setIsErr] = useState(false)
    
    const handleClickDelete = ({target}) => {
        target.disabled = true
        deleteCommentById(target.value)
        .then(() => {
           setIsErr(false)
           const updatedComments = comments.filter((currComment) => currComment.comment_id !== comment.comment_id)
           setComments(updatedComments) 
        })
        .catch((err) => {
            setIsErr(true)
            target.disabled = false
        })
    }
    
    return (
        <div className='comment__card'>
            <div></div>
            {user.username === comment.author ? <button onClick={handleClickDelete} className='comment__deletebtn' value={comment.comment_id}>❌</button>: null}
            {isErr ? <p className='err'>Ooops something went wrong, please check and try again...</p> : null}
            <h5 className='comment__author'>User: {comment.author}</h5>
            <p className='comment__body'>{comment.body}</p>
            <p className='comment__votes'>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentLi;