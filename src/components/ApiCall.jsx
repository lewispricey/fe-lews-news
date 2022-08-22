import axios from 'axios';

export const getArticles = () => {
    return axios.get("https://lews-news.herokuapp.com/api/articles").then(({data}) => data)
}