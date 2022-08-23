import axios from 'axios'

const getArticleByID = (article_id) => {
    return axios.get(`https://lews-news.herokuapp.com/api/articles/${article_id}`).then(({data}) => data)
}

export default getArticleByID