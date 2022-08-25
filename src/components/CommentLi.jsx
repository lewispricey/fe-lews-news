import React from 'react';

const CommentLi = ({comment}) => {
    return (
        <div className='comment__card card'>
            <h5 className='comment__author'>Author: {comment.author}</h5>
            <p className='comment__body'>{comment.body}</p>
            <p className='comment__timestamp'>Posted at: {comment.created_at}</p>
            <p className='comment__votes'>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentLi;