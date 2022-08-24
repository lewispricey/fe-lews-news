import axios from 'axios'

const getCommentsByArticleId = (article_id) => {
    return axios.get(`https://lews-news.herokuapp.com/api/articles/${article_id}/comments`).then(({data}) => data)
}

export default getCommentsByArticleId