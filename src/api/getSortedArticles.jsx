import axios from 'axios';

const getSortedArticles = (sortBy, order) => {
    return axios.get(`https://lews-news.herokuapp.com/api/articles`, {params: {"sort_by":sortBy, order}}).then(({data}) => data).catch((err) => err)
}

export default getSortedArticles