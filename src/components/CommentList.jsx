import {useState, useEffect, useContext} from 'react';
import getCommentsByArticleId from '../api/getCommentsByArticleId';
import UserContext from '../contexts/User';
import CommentForm from './CommentForm';
import CommentLi from './CommentLi';

const CommentList = ({articleID}) => {
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [postCommentActive, setPostCommentActive] = useState(false)
    
    useEffect(() => {
        getCommentsByArticleId(articleID)
        .then(({comments}) => {
            setComments(comments)
        })
    }, [articleID])

    const handleClickAddComment = () => {
        //check user signed in, if not give message to sign in before showing the comment form
        if(user.username === undefined) {
            window.alert("Please sign in to post a comment")
        } else{
            setPostCommentActive(!postCommentActive)}

    }

    return (
        <div className='comments__container'>
            <h2 className='comments__heading'>Comments</h2>
            <button onClick={handleClickAddComment} className='comments__addcomment__btn'>{postCommentActive ? "-" : "+"}</button>
            {postCommentActive ? <CommentForm comments={comments} setComments={setComments} articleID={articleID}/> : null}
            <ul className='comments__list'>
                {comments.map((comment) => <CommentLi comment={comment}/>)}
            </ul>
        </div>
    );
};

export default CommentList;