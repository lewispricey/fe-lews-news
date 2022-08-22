import axios from 'axios';

const getArticlesByTopic = (topic) => {
    return axios.get(`https://lews-news.herokuapp.com/api/articles?topic=${topic}`).then(({data}) => data)
}

export default getArticlesByTopic