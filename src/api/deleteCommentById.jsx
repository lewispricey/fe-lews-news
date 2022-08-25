import axios from 'axios'

const deleteCommentById = (commentId) => {
    return axios.delete(`https://lews-news.herokuapp.com/api/comments/${commentId}`).then(({data}) => data)
}

export default deleteCommentById