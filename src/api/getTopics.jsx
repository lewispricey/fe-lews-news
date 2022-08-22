import axios from 'axios';

const getTopics = () => {
    return axios.get(`https://lews-news.herokuapp.com/api/topics`).then(({data}) => data)
}

export default getTopics