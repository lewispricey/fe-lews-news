import axios from 'axios';

const getArticles = () => {
    return axios.get("https://lews-news.herokuapp.com/api/articles").then(({data}) => data)
}

export default getArticles