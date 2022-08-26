import axios from 'axios';

const getNewestArticles = (limit) => {
    return axios.get('https://lews-news.herokuapp.com/api/articles/?sort_by=article_id&limit=6').then(({data}) => data)
}

export default getNewestArticles