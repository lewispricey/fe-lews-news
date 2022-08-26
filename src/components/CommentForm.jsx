import React, { useContext, useState } from 'react';
import '../styles/comments.css'
import postNewComment from '../api/postNewComment';
import UserContext from '../contexts/User';

const CommentForm = ({articleID, comments, setComments}) => {
    const {user} = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const [isErr, setIsErr] = useState(false)
    const [errMsg, setErrMsg] = useState("Ooops something went wrong")
    
    const handleChangeCommentInput = ({target}) => {
        setNewComment(target.value)
        setIsErr(false)
    }

    const handleClickPostComment = (event) => {
        event.preventDefault()
        event.target.disabled = true
        if(!user.username || !articleID || newComment.length < 5){
            setErrMsg("Ooops something went wrong, please check your signed in and your comment is not empty then try again...")
            setIsErr(true)
            event.target.disabled = false
        } else {
            postNewComment(articleID, user.username, newComment)
            .then(({data}) => {
                setIsErr(false)
                const newComments = [...comments]
                newComments.unshift(data.newComment)
                setComments(newComments)
                setNewComment("")
                event.target.disabled = false
            })
            .catch((err) => {
                setErrMsg("Ooops something went wrong, please check your input and try")
                setIsErr(true)
                event.target.disabled = false
            })
        }

        
    }

    return (
        <div className='comment__form__container'>
            <form className='comment__form' action="">
                <label className='comment__form__inputlabel' htmlFor="comment-input">{`${user.name}, Have Your Say:`}</label>
                {isErr ? <p className='err'>{errMsg}</p> : null}
                <textarea onChange={handleChangeCommentInput} value={newComment} className='comment__form__input' name="commentInput" id="comment-input" cols="25" rows="5"></textarea>
                <button onClick={handleClickPostComment} value={newComment} className='comment__form__btn' type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;