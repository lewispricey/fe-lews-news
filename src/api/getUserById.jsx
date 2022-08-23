import axios from 'axios';

const getUserByID = (userId) => {
    return axios.get(`https://lews-news.herokuapp.com/api/users/${userId}`).then(({data}) => data)
}

export default getUserByID