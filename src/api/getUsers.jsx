import axios from "axios";

const GetUsers = () => {
    return axios.get("https://lews-news.herokuapp.com/api/users").then(({data}) => data)
}

export default GetUsers