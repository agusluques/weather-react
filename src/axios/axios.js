import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    params: {
        units: 'metric',
        appid: process.env.REACT_APP_API_KEY
    }

});

export default instance;