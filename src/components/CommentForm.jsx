import React, { useContext, useState } from 'react';
import postNewComment from '../api/postNewComment';
import UserContext from '../contexts/User';

const CommentForm = ({articleID, comments, setComments}) => {
    const {user} = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const handleChangeCommentInput = ({target}) => setNewComment(target.value)

    const handleClickPostComment = (event) => {
        event.preventDefault()
        //grey the submit button out to prevent multiple clicks
        event.target.disabled = true
        //trigger a validation function - user logged in & text is longerr than 5 chars. 
        if(!user.username || !articleID || !newComment){
            return window.alert("Ooops something went wrong, please check your signed in and your comment is not empty then try again...")
        }

        postNewComment(articleID, user.username, newComment)
        .then(({data}) => {
            window.alert("Comment Posted Successfully!")
            const newComments = [...comments]
            newComments.unshift(data.newComment)
            setComments(newComments)
            setNewComment("")
        })
        .catch((err) => {
            window.alert("Ooops something went wrong, please check and try again...")
            event.target.disabled = false
        })
        
    }

    return (
        <div className='comment__form__container'>
            <form className='comment__form' action="">
                <label className='comment__form__inputlabel' htmlFor="comment-input">{`${user.name}, Have Your Say:`}</label>
                <textarea onChange={handleChangeCommentInput} value={newComment} className='comment__form__input' name="commentInput" id="comment-input" cols="25" rows="5"></textarea>
                <button onClick={handleClickPostComment} value={newComment} className='comment__form__btn' type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;