import axios from 'axios';

const URL = 'https://www.omdbapi.com/';
const API_KEY = '746fd547'

export const fetchMovie = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            t: query
        }
    });

    return data;
}