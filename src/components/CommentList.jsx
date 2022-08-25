import {useState, useEffect, useContext} from 'react';
import '../styles/comments.css'
import getCommentsByArticleId from '../api/getCommentsByArticleId';
import UserContext from '../contexts/User';
import CommentForm from './CommentForm';
import CommentLi from './CommentLi';

const CommentList = ({articleID}) => {
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [postCommentActive, setPostCommentActive] = useState(false)
    const [err, setErr] = useState(false)
    
    useEffect(() => {
        getCommentsByArticleId(articleID)
        .then(({comments}) => {
            setComments(comments)
        })
    }, [articleID])

    const handleClickAddComment = () => {
        if(user.username === undefined) {
            setErr(true)
        } else{
            setPostCommentActive(!postCommentActive)}

    }

    return (
        <div className='comments__container'>
            <h2 className='comments__heading'>Comments</h2>
            <button onClick={handleClickAddComment} className='comments__addcomment__btn'>{postCommentActive ? "-" : "+"}</button>
            {err ? <p className='err'>Please sign in to post a comment</p> : null}
            {postCommentActive ? <CommentForm comments={comments} setComments={setComments} articleID={articleID}/> : null}
            <ul className='comments__list'>
                {comments.map((comment) => <CommentLi comments={comments} setComments={setComments} comment={comment}/>)}
            </ul>
        </div>
    );
};

export default CommentList;