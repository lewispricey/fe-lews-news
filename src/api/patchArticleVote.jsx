import axios from 'axios'

const patchArticleVote = (article_id, vote) => {
    return axios.patch(`https://lews-news.herokuapp.com/api/articles/${article_id}`, {"inc_votes": vote}).then((data) => data)
}

export default patchArticleVote