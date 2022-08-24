import {useState, useEffect} from 'react';
import getCommentsByArticleId from '../api/getCommentsByArticleId';
import CommentLi from './CommentLi';


const CommentList = ({articleID}) => {
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getCommentsByArticleId(articleID).then(({comments}) => setComments(comments))
    }, [articleID])

    return (
        <div className='comments__container'>
            <h2>Comments</h2>
            {comments.map((comment) => <CommentLi comment={comment}/>)}
        </div>
    );
};

export default CommentList;