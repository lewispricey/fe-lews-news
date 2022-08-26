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
            isErr(false)
           const updatedComments = comments.filter((currComment) => currComment.comment_id !== comment.comment_id)
           setComments(updatedComments) 
        })
        .catch((err) => {
            isErr(true)
            target.disabled = false
        })
    }
    
    return (
        <div className='comment__card'>
            {user.username === comment.author ? <button onClick={handleClickDelete} className='comment__deletebtn' value={comment.comment_id}>🗑️</button> : null}
            {isErr ? <p className='err'>Ooops something went wrong, please check and try again...</p> : null}
            <h5 className='comment__author'>Author: {comment.author}</h5>
            <p className='comment__body'>{comment.body}</p>
            {/* <p className='comment__timestamp'>Posted at: {comment.created_at}</p> */}
            <p className='comment__votes'>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentLi;