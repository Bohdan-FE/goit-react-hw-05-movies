import axios from 'axios';

const KEY = "9efc729b95f20ce1b26304465f4ffb42"
const BASE_URL = `https://api.themoviedb.org/3/`;

export const getMovies = async () => {
    const resp = await axios(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
    return resp.data   
}

export const getMovieById = async (id) => {
    const resp = await axios(`${BASE_URL}movie/${id}?api_key=${KEY}`);
    return resp.data  
}

export const getMovieCredits = async (id) => {
    const resp = await axios(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);
    return resp.data  
}

export const getMovieReviews = async (id) => {
    const resp = await axios(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`);
    return resp.data  
}

export const searchMovies = async (query) => {
    const resp = await axios(`${BASE_URL}search/movie?query=${query}&api_key=${KEY}`);
    return resp.data  
}