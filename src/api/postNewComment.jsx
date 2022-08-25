import axios from 'axios'

const postNewComment = (article_id, author, body) => {
    const postBody = { username:author, body }
    return axios.post(`https://lews-news.herokuapp.com/api/articles/${article_id}/comments`, postBody).then((data) => data)
}

export default postNewComment