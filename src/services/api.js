import axios from 'axios';

const api = axios.create({
    baseURL:'https://shrouded-springs-30345.herokuapp.com',
    headers:{'content-type': 'application/json'}
});

export default api;