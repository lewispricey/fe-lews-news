import React, { useContext } from 'react';
import deleteCommentById from '../api/deleteCommentById';
import UserContext from '../contexts/User';

const CommentLi = ({comment, comments, setComments}) => {
    const {user} = useContext(UserContext)
    
    const handleClickDelete = ({target}) => {
        target.disabled = true
        deleteCommentById(target.value)
        .then(() => {
           const updatedComments = comments.filter((currComment) => currComment.comment_id !== comment.comment_id)
           setComments(updatedComments) 
           window.alert("Comment deleted!")
        })
        .catch((err) => {
            window.alert("Ooops something went wrong, please check and try again...")
            target.disabled = false
        })
    }
    
    return (
        <div className='comment__card card'>
            {user.username === comment.author ? <button onClick={handleClickDelete} className='comment__deletebtn' value={comment.comment_id}>🗑️</button> : null}
            <h5 className='comment__author'>Author: {comment.author}</h5>
            <p className='comment__body'>{comment.body}</p>
            <p className='comment__timestamp'>Posted at: {comment.created_at}</p>
            <p className='comment__votes'>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentLi;